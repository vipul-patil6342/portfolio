import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false)
    };

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' }
    ]

    return (
        <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 z-50">
            <div className="mx-auto px-12 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-cyan-400">Vipul Patil</div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm">
                    {navLinks.map(link => (
                        <button 
                            key={link.id}
                            onClick={() => scrollToSection(link.id)} 
                            className="hover:text-cyan-400 transition cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-cyan-400 hover:text-cyan-300 transition"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900/95 border-t border-slate-800 px-12 py-4">
                    <div className="flex flex-col gap-4 text-sm">
                        {navLinks.map(link => (
                            <button 
                                key={link.id}
                                onClick={() => scrollToSection(link.id)} 
                                className="hover:text-cyan-400 transition cursor-pointer text-left py-2"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;