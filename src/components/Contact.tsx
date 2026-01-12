import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container max-w-2xl text-center">
        <p className="mono text-primary text-sm mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I'll do my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-card border-border focus:border-primary"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-card border-border focus:border-primary"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-card border-border focus:border-primary resize-none"
          />
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
          >
            Send Message
          </Button>
        </form>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
