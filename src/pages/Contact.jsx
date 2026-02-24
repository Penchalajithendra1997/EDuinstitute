import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare, User, BookOpen, Globe } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        courseType: 'domestic',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            <section className="section-padding pt-40">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-10"
                    >
                        <div className="flex flex-col gap-6">
                            <span className="text-accent font-semibold uppercase tracking-widest text-sm">Get in Touch</span>
                            <h1 className="text-6xl font-bold heading-font">Join our <span className="gradient-text">Community</span></h1>
                            <p className="text-text-muted text-lg max-w-[500px]">
                                Have questions about admissions, courses, or campus life? Our team is here to help you navigate your journey toward higher education.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-6 glass-card p-6 border-l-4 border-accent">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg heading-font">Call Us</h4>
                                    <p className="text-text-muted">+1 (234) 567-8900</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 glass-card p-6 border-l-4 border-accent-secondary">
                                <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg heading-font">Email Us</h4>
                                    <p className="text-text-muted">admissions@eduinst.edu</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 glass-card p-6 border-l-4 border-accent">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg heading-font">Visit Us</h4>
                                    <p className="text-text-muted">123 Institution Way, University District, Global City</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Admission Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-card p-12 border-none relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>

                        <h2 className="text-3xl font-bold heading-font mb-10 flex items-center gap-3">
                            Admission <span className="gradient-text">Inquiry</span>
                        </h2>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-[500px] flex flex-col items-center justify-center text-center gap-6"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                                    <Send size={40} />
                                </div>
                                <h3 className="text-2xl font-bold">Inquiry Sent!</h3>
                                <p className="text-text-muted">Thank you for your interest. Our admissions team will contact you within 24-48 hours.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn-primary mt-4"
                                >
                                    Send another inquiry
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                                            <input
                                                type="text" name="name" required placeholder="John Doe"
                                                className="w-full bg-primary-light border border-glass-border rounded-xl py-4 pl-12 pr-4 text-text focus:border-accent outline-none transition-all"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                                            <input
                                                type="email" name="email" required placeholder="john@example.com"
                                                className="w-full bg-primary-light border border-glass-border rounded-xl py-4 pl-12 pr-4 text-text focus:border-accent outline-none transition-all"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Department</label>
                                        <div className="relative">
                                            <BookOpen size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                                            <select
                                                name="department" required
                                                className="w-full bg-primary-light border border-glass-border rounded-xl py-4 pl-12 pr-4 text-text focus:border-accent outline-none appearance-none cursor-pointer"
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Department</option>
                                                <option value="cs">Computer Science</option>
                                                <option value="ee">Electrical</option>
                                                <option value="ec">Electronics</option>
                                                <option value="me">Mechanical</option>
                                                <option value="ce">Civil</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Course Interest</label>
                                        <div className="relative">
                                            <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                                            <select
                                                name="courseType" required
                                                className="w-full bg-primary-light border border-glass-border rounded-xl py-4 pl-12 pr-4 text-text focus:border-accent outline-none appearance-none cursor-pointer"
                                                onChange={handleChange}
                                            >
                                                <option value="domestic">Domestic Course</option>
                                                <option value="international">International Course</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message / Inquiry</label>
                                    <div className="relative">
                                        <MessageSquare size={18} className="absolute left-4 top-4 text-accent" />
                                        <textarea
                                            name="message" required rows="4" placeholder="Tell us about your background and interests..."
                                            className="w-full bg-primary-light border border-glass-border rounded-xl py-4 pl-12 pr-4 text-text focus:border-accent outline-none transition-all resize-none"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary w-full py-5 text-lg mt-4 flex items-center justify-center gap-3">
                                    Submit Application <Send size={20} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
            <style>{`
        .bg-primary-light { background-color: #1e293b; }
        .border-glass-border { border-color: rgba(255, 255, 255, 0.1); }
        .text-green-500 { color: #22c55e; }
        .bg-green-500\\/20 { background-color: rgba(34, 197, 94, 0.2); }
      `}</style>
        </div>
    );
};

export default Contact;
