import React from 'react'
import SkillGroup from './SkillGroup';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Backend',
            skills: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'JWT']
        },
        {
            title: 'Frontend',
            skills: ['React', 'Redux', 'HTML/CSS', 'JavaScript']
        },
        {
            title: 'Database',
            skills: ['MySQL', 'Redis', 'SQL']
        },
        {
            title: 'Tools & DevOps',
            skills: ['Git', 'Postman', 'Maven']
        }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillGroups.map((group) => (
                        <SkillGroup key={group.title} title={group.title} skills={group.skills} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills