import React from 'react'

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-18 bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-white">About</h2>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                    <p>
                        I am a full-stack developer with a strong focus on backend development and building scalable web applications. I have hands-on experience developing real-world projects using Spring Boot and React, where I worked extensively on designing RESTful APIs, implementing secure authentication and authorization, and managing database-driven systems.
                    </p>
                    <p>
                        My backend work includes building clean and maintainable APIs, handling role-based access control, designing efficient relational database schemas, and ensuring proper validation and error handling. On the frontend side, I focus on integrating React applications with backend services and creating responsive, user-friendly interfaces.
                    </p>
                    <p>
                        I enjoy working on backend-heavy systems, optimizing application performance, and writing clean, structured code. I am always interested in improving my skills and contributing to projects that solve practical, real-world problems.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About