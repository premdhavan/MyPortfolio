import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ai-Financial Platform',
    description:
      'A platform for managing your finances with AI. It uses AI to help you manage your finances and make decisions.',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Shadcn UI', 'JavaScript', 'Supabase', 'Clerk', 'AI'],
    github: 'https://github.com/premdhavan/Ai-Finance-Platform',
    live: '#',
  },
  {
    title: 'Job Portal Platform',
    description:
      'A Online Job Portal is a web application designed  to helip job seekers and employers in an efficient, secure, and user-friendly manner.',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Shadcn UI', 'JavaScript', 'Supabase', 'Clerk', 'AI'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-4xl">
        <h2 className="flex items-center gap-4 section-heading">
          Things I've Built
          <span className="h-px bg-border flex-1 max-w-xs"></span>
        </h2>

        <div className="mt-8 space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 md:p-8 card-hover group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <p className="mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="mono text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
