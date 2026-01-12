const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Shadcn UI', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'MySQL', 'REST APIs', 'Supabase', 'Prisma'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'AWS', 'Cursor AI', 'Lovable AI'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="container max-w-4xl">
        <h2 className="flex items-center gap-4 section-heading">
          Skills & Technologies
          <span className="h-px bg-border flex-1 max-w-xs"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
