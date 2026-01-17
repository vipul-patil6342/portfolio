import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-cyan-500/50 transition">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm">{project.subtitle}</p>
                </div>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                >
                    <Github size={24} />
                </a>
            </div>

            <p className="text-slate-300 mb-4">{project.description}</p>

            <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                    {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 rounded text-slate-300 text-xs border border-slate-600">
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
            >
                Visit Website
                <ExternalLink size={16} />
            </a>
        </div>
    );
}

export default ProjectCard;