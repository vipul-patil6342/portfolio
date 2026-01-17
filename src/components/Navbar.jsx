import React from 'react'

const Navbar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 z-50">
            <div className="mx-auto px-12 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-cyan-400">Vipul Patil</div>
                <div className="flex gap-8 text-sm">
                    <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition cursor-pointer">About</button>
                    <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition cursor-pointer">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition cursor-pointer">Projects</button>
                    <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition cursor-pointer">Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar