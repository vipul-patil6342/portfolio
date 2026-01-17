import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-18">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
                <p className="text-slate-400 mb-10">
                    I'm always interested in hearing about new opportunities and interesting projects.
                </p>

                <div className="flex gap-6 justify-center flex-wrap">
                    <a
                        href="mailto:patilvipul2912@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition text-white font-medium"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vipulpatil6342"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/vipul-patil6342"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700"
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;