import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-card rounded-none border-t-0 border-x-0' : 'py-6 bg-transparent'}`} style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold heading-font gradient-text no-underline">
                    <Landmark size={32} className="text-accent" />
                    <span>EduInst</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors no-underline ${location.pathname === link.path ? 'text-accent' : 'text-text-muted hover:text-text'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-primary no-underline py-2 px-6 rounded-lg text-sm">
                        Admissions
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-text bg-transparent border-none cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card mt-4 rounded-2xl overflow-hidden p-6"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-medium no-underline ${location.pathname === link.path ? 'text-accent' : 'text-text-muted'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" className="btn-primary text-center no-underline" onClick={() => setIsOpen(false)}>
                                Admissions
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none; }
          .hidden.md\\:flex { display: flex; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
