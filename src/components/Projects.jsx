import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Online Shopping Platform',
            subtitle: 'Full-Stack | Spring Boot | React',
            description: 'A complete e-commerce platform showcasing full-stack development expertise. Features secure user authentication, product catalog management, shopping cart, order processing, and integrated payment gateway.',
            features: [
                'JWT-based authentication and Spring Security integration for role-based access control',
                '20+ RESTful APIs with comprehensive error handling and validation',
                'Redis caching for frequently accessed data and session management',
                'Stripe payment integration for secure transactions',
                'React frontend with Redux state management and responsive design'
            ],
            tech: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'React', 'Redux', 'MySQL', 'Redis', 'Stripe'],
            github: 'https://github.com/vipul-patil6342/eCommerce',
            website: ' https://bazaar-taupe.vercel.app'
        },
        {
            title: 'Developer Portfolio',
            subtitle: 'React | Tailwind CSS | Responsive Design',
            description: 'A modern, minimal one-page developer portfolio showcasing projects, skills, and experience. Features smooth navigation, responsive design, and clean UI.',
            features: [
                'Responsive design for mobile, tablet, and desktop devices',
                'Smooth scroll navigation between sections',
                'Component-based architecture for easy maintenance and scalability',
                'Modern dark theme with cyan accents for professional appearance',
                'SEO-optimized structure with semantic HTML',
                'Fast performance with optimized React components'
            ],
            tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'Component Architecture'],
            github: 'https://github.com/vipul-patil6342/portfolio',
            website: 'https://vipul-patil.vercel.app/'
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-18 bg-slate-900/50">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl font-bold mb-12 text-white">Projects</h2>

                <div className="space-y-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects