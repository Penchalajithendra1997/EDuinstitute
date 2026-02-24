import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Globe, Users, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const stats = [
        { label: 'Faculty Members', value: '100+', icon: Users },
        { label: 'Students per Dept', value: '100+', icon: BookOpen },
        { label: 'Departments', value: '5+', icon: Shield },
        { label: 'Global Partners', value: '50+', icon: Globe },
    ];

    const departments = [
        { name: 'Computer Science', desc: 'Leading the digital revolution with cutting-edge tech.' },
        { name: 'Electrical', desc: 'Powering the future with sustainable energy solutions.' },
        { name: 'Electronics', desc: 'Innovating at the intersection of hardware and software.' },
        { name: 'Mechanical', desc: 'Engineering the machines that move the world.' },
        { name: 'Civil', desc: 'Designing resilient infrastructures for tomorrow.' },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero section-padding flex items-center justify-between min-h-screen relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <span className="text-accent font-semibold tracking-widest uppercase text-sm">International Center of Excellence</span>
                        <h1 className="text-6xl md:text-7xl font-bold leading-tight heading-font">
                            Shape Your Future <br />
                            <span className="gradient-text">Global Education</span>
                        </h1>
                        <p className="text-text-muted text-lg max-w-[500px]">
                            Empowering students with world-class faculty, diverse departments, and a multicultural community focused on innovation and excellence.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/courses" className="btn-primary no-underline flex items-center gap-2">
                                Explore Courses <ArrowRight size={20} />
                            </Link>
                            <Link to="/about" className="glass-card no-underline py-3 px-8 text-text font-semibold hover:border-accent transition-all flex items-center gap-2">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="w-full aspect-square glass-card overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 group-hover:opacity-50 transition-opacity"></div>
                            {/* Replace with actual image later */}
                            <div className="w-full h-full flex items-center justify-center bg-primary-light">
                                <Landmark size={200} className="text-accent/20" />
                            </div>
                        </div>
                        {/* Floating Stats */}
                        <div className="absolute -bottom-8 -left-8 glass-card p-6 flex flex-col gap-2">
                            <span className="text-3xl font-bold gradient-text">100+</span>
                            <span className="text-xs text-text-muted uppercase tracking-wider">Expert Faculty</span>
                        </div>
                    </motion.div>
                </div>
                {/* Background Decorative Elements */}
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-secondary/20 rounded-full blur-[120px]"></div>
            </section>

            {/* Stats Section */}
            <section className="stats-section section-padding bg-primary-light/50">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 text-center flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-4xl font-bold heading-font">{stat.value}</h3>
                            <p className="text-text-muted text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Departments Preview */}
            <section className="departments section-padding">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="flex flex-col gap-4">
                            <span className="text-accent font-semibold uppercase tracking-widest text-sm">Our Specialties</span>
                            <h2 className="text-5xl font-bold heading-font">Diverse Departments</h2>
                        </div>
                        <Link to="/courses" className="text-accent no-underline font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
                            View All Courses <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {departments.map((dept, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-8 flex flex-col gap-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                                    <Award size={24} />
                                </div>
                                <h4 className="text-2xl font-bold heading-font">{dept.name}</h4>
                                <p className="text-text-muted text-sm leading-relaxed">{dept.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
        .hero { position: relative; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .lg\\:block { display: block; }
        }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:flex-row { flex-direction: row; }
        }
        .bg-primary-light\\/50 { background-color: rgba(30, 41, 59, 0.5); }
        .text-accent\\/20 { color: rgba(59, 130, 246, 0.2); }
      `}</style>
        </div>
    );
};

// Helper for Missing Icon
const Landmark = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="3" y1="22" x2="21" y2="22"></line>
        <line x1="6" y1="18" x2="6" y2="11"></line>
        <line x1="10" y1="18" x2="10" y2="11"></line>
        <line x1="14" y1="18" x2="14" y2="11"></line>
        <line x1="18" y1="18" x2="18" y2="11"></line>
        <polygon points="12 2 20 7 4 7 12 2"></polygon>
    </svg>
);

export default Home;
