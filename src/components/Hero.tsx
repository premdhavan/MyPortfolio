import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container max-w-4xl">
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="mono text-primary mb-4">Hi, my name is</p>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Prem Dhawan.
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            I build things for the web and through AI.
          </h2>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
            I'm a software developer specializing in building exceptional digital experiences through AI. 
            Currently, I'm focused on creating accessible, human-centered products through AI.
          </p>
        </div>
        
        <div className="animate-fade-up flex gap-4" style={{ animationDelay: '0.5s' }}>
          <Button asChild size="lg" className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
