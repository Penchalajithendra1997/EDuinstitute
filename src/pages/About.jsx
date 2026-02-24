import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award, Star, BookOpen } from 'lucide-react';

const About = () => {
    const values = [
        { title: 'Excellence', icon: Award, desc: 'Committed to achieving the highest standards in every academic venture.' },
        { title: 'Global Impact', icon: Target, desc: 'Preparing students to solve the world\'s most pressing challenges.' },
        { title: 'Innovation', icon: Rocket, desc: 'Fostering a culture of creative thinking and scientific research.' },
    ];

    const facultyHighlights = [
        { label: 'Ph.D. Holders', value: '85%' },
        { label: 'Research Papers', value: '1200+' },
        { label: 'Global Experience', value: '60%' },
        { label: 'Student Ratio', value: '1:15' },
    ];

    return (
        <div className="about-page">
            {/* Narrative Section */}
            <section className="section-padding pt-40">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Our Legacy</span>
                        <h1 className="text-6xl font-bold heading-font">Cultivating Minds since <span className="gradient-text">1998</span></h1>
                        <p className="text-text-muted text-lg leading-relaxed">
                            EduInst was founded with a vision to bridge the gap between regional education and global standards. Over two decades, we have grown from a small technical institute into a leading institution of higher learning.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {facultyHighlights.map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-3xl font-bold heading-font text-accent">{stat.value}</span>
                                    <span className="text-sm text-text-muted">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="w-full aspect-video glass-card overflow-hidden bg-primary-light flex items-center justify-center">
                            <Users size={120} className="text-accent/10" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 glass-card p-10 max-w-[300px] border-accent/20">
                            <p className="text-lg font-bold italic mb-2">"Education is not just about learning facts, but training the mind to think."</p>
                            <span className="text-sm text-accent font-bold">— Dean Richard Miles</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Showcase */}
            <section className="section-padding bg-primary-light/30">
                <div className="max-w-[1400px] mx-auto text-center mb-20">
                    <h2 className="text-5xl font-bold heading-font mb-6">Our World-Class <span className="gradient-text">Faculty</span></h2>
                    <p className="text-text-muted max-w-[700px] mx-auto text-lg">
                        Our institution prides itself on having 100+ distinguished faculty members from various backgrounds, bringing professional expertise to the classroom.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-10 flex flex-col gap-6 text-center items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <val.icon size={40} />
                            </div>
                            <h3 className="text-2xl font-bold heading-font">{val.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Departments Detail */}
            <section className="section-padding">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col gap-12">
                        <h2 className="text-5xl font-bold heading-font">Our Departments</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="flex flex-col gap-6">
                                <p className="text-text-muted leading-relaxed">
                                    Each of our 5 main departments manages over 100 students per batch, ensuring a vibrant and competitive learning environment. We maintain a strict focus on practical application and research in all our engineering and technical streams.
                                </p>
                                <div className="flex flex-col gap-4">
                                    {['Computer Science', 'Electrical', 'Electronics', 'Mechanical', 'Civil'].map(dept => (
                                        <div key={dept} className="flex items-center gap-4 glass-card px-6 py-4 border-l-4 border-accent">
                                            <BookOpen size={20} className="text-accent" />
                                            <span className="font-bold">{dept} Engineering</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full glass-card bg-accent/5 flex items-center justify-center p-20">
                                <Star size={100} className="text-accent/20 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style>{`
        .bg-primary-light\\/30 { background-color: rgba(30, 41, 59, 0.3); }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
        </div>
    );
};

export default About;
