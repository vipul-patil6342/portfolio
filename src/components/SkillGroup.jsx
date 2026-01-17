import React from 'react'

const SkillGroup = ({ title, skills }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm border border-slate-700">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillGroup