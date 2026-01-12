const About = () => {
  const technologies = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'HTML/CSS',
    'PostgreSQL',
    'MySQL',
    'Git',
    'GitHub',
    'AI',
    'AWS',
    'Cursor AI',
    'Lovable AI',
    'APIs',
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-4xl">
        <h2 className="flex items-center gap-4 section-heading">
          About Me
          <span className="h-px bg-border flex-1 max-w-xs"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mt-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! My name is Prem and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2023 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me 
              a lot about HTML & CSS!
            </p>
          
           
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">▹</span>
                  <span className="mono text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <div className="w-full aspect-square bg-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  PD
                </div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
