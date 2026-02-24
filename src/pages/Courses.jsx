import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Globe, Clock, CheckCircle, GraduationCap, Laptop, Cpu, Zap, Cog, Building2 } from 'lucide-react';

const Courses = () => {
    const [activeTab, setActiveTab] = useState('domestic');

    const categories = [
        { id: 'domestic', label: 'Domestic Courses', icon: BookOpen },
        { id: 'international', label: 'International Courses', icon: Globe },
    ];

    const coursesData = {
        domestic: [
            { name: 'B.Tech Computer Science', dept: 'Computer Science', duration: '4 Years', icon: Laptop, desc: 'Master software engineering, AI, and cybersecurity with industry-aligned curriculum.' },
            { name: 'B.E. Electrical Engineering', dept: 'Electrical', duration: '4 Years', icon: Zap, desc: 'Specialized focus on smart grids, renewable energy, and power systems.' },
            { name: 'B.Tech Mechanical Engineering', dept: 'Mechanical', duration: '4 Years', icon: Cog, desc: 'Advanced robotics, thermodynamics, and manufacturing technologies.' },
            { name: 'B.E. Electronics & Communication', dept: 'Electronics', duration: '4 Years', icon: Cpu, desc: 'Exploring VLSI design, signal processing, and telecommunications.' },
            { name: 'B.E. Civil Engineering', dept: 'Civil', duration: '4 Years', icon: Building2, desc: 'Structural analysis, urban planning, and sustainable infrastructure design.' },
        ],
        international: [
            { name: 'Global MBA', dept: 'Management', duration: '2 Years', icon: Globe, desc: 'In partnership with top UK/US universities, focusing on global business strategy.' },
            { name: 'M.S. Data Science', dept: 'Computer Science', duration: '1.5 Years', icon: Laptop, desc: 'International research opportunities and double-degree options.' },
            { name: 'Global Tech Leadership', dept: 'Interdisciplinary', duration: '1 Year', icon: GraduationCap, desc: 'Accelerated program for future technology executives and innovators.' },
        ],
    };

    return (
        <div className="courses-page section-padding">
            <div className="max-w-[1400px] mx-auto min-h-screen pt-20">
                <div className="text-center max-w-[800px] mx-auto mb-20 flex flex-col gap-6">
                    <span className="text-accent font-semibold uppercase tracking-widest text-sm">Academic Catalog</span>
                    <h1 className="text-6xl font-bold heading-font">Explore Our <span className="gradient-text">Programs</span></h1>
                    <p className="text-text-muted text-lg">
                        We offer a wide range of undergraduate and postgraduate programs designed to meet international standards and industry requirements.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="glass-card p-2 flex gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`py-3 px-8 rounded-xl font-semibold transition-all border-none cursor-pointer flex items-center gap-3 ${activeTab === cat.id ? 'bg-accent text-white shadow-lg' : 'bg-transparent text-text-muted hover:text-text'
                                    }`}
                            >
                                <cat.icon size={20} />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Courses Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {coursesData[activeTab].map((course, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="glass-card p-10 flex flex-col gap-8 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-accent/10 transition-colors"></div>

                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-accent">
                                        <course.icon size={32} />
                                    </div>
                                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent-secondary bg-accent-secondary/10 py-1 px-3 rounded-full">
                                        {course.dept}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl font-bold heading-font">{course.name}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{course.desc}</p>
                                </div>

                                <div className="flex items-center gap-6 mt-4 pt-8 border-t border-glass-border">
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Clock size={16} className="text-accent" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <CheckCircle size={16} className="text-accent" />
                                        <span>Full Time</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <style>{`
        .bg-accent { background-color: #3b82f6; }
        .text-accent-secondary { color: #8b5cf6; }
        .bg-accent-secondary\\/10 { background-color: rgba(139, 92, 246, 0.1); }
      `}</style>
        </div>
    );
};

export default Courses;
