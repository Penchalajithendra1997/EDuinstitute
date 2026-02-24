import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Landmark } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="section-padding bg-primary-light border-t border-glass-border">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Info */}
                <div className="flex flex-col gap-6">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold heading-font gradient-text no-underline">
                        <Landmark size={32} className="text-accent" />
                        <span>EduInst</span>
                    </Link>
                    <p className="text-text-muted text-sm leading-relaxed">
                        Empowering the next generation of global leaders through world-class education, innovative research, and diverse multicultural environment.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-muted hover:text-accent transition-all">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="heading-font text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="list-none p-0 flex flex-col gap-4">
                        {['Home', 'About Us', 'Our Courses', 'Admissions', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to="#" className="text-text-muted no-underline hover:text-text transition-colors text-sm">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Departments */}
                <div>
                    <h4 className="heading-font text-lg font-bold mb-6">Departments</h4>
                    <ul className="list-none p-0 flex flex-col gap-4">
                        {['Computer Science', 'Electrical', 'Electronics', 'Mechanical', 'Civil Engineering'].map((item) => (
                            <li key={item}>
                                <Link to="#" className="text-text-muted no-underline hover:text-text transition-colors text-sm">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="heading-font text-lg font-bold mb-6">Contact Us</h4>
                    <ul className="list-none p-0 flex flex-col gap-6">
                        <li className="flex items-start gap-4 text-text-muted text-sm">
                            <MapPin size={20} className="text-accent flex-shrink-0" />
                            <span>123 Institution Way, University District, Global City, 560001</span>
                        </li>
                        <li className="flex items-center gap-4 text-text-muted text-sm">
                            <Phone size={20} className="text-accent flex-shrink-0" />
                            <span>+1 (234) 567-8900</span>
                        </li>
                        <li className="flex items-center gap-4 text-text-muted text-sm">
                            <Mail size={20} className="text-accent flex-shrink-0" />
                            <span>admissions@eduinst.edu</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                <p>© 2026 EduInst Institution of Excellence. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="no-underline hover:text-text">Privacy Policy</a>
                    <a href="#" className="no-underline hover:text-text">Terms of Service</a>
                    <a href="#" className="no-underline hover:text-text">Cookie Policy</a>
                </div>
            </div>
            <style>{`
        footer { margin-top: 100px; }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:flex-row { flex-direction: row; }
        }
        .bg-primary-light { background-color: #1e293b; }
      `}</style>
        </footer>
    );
};

export default Footer;
