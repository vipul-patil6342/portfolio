import { ChevronDown, ExternalLink, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Aspiring Full-Stack Developer | Spring Boot & React";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 text-center pt-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                    Vipul Patil
                </h1>
                <div className="mb-8">
                    <p className="text-xl md:text-2xl text-cyan-400 font-medium min-h-12">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>
                <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                    Building scalable, secure web applications with clean architecture and modern practices
                </p>

                <div className="flex gap-4 justify-center mb-12 flex-wrap">
                    <a
                        href="https://github.com/vipul-patil6342"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700"
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vipulpatil6342"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition text-white"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700"
                    >
                        <ExternalLink size={20} />
                        Resume
                    </a>
                </div>

                <button
                    onClick={() => scrollToSection('about')}
                    className="inline-flex cursor-pointer flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                >
                    <span className="text-sm">Scroll to explore</span>
                    <ChevronDown size={24} className="animate-bounce" />
                </button>
            </div>
        </section>
    );
}

export default Hero;