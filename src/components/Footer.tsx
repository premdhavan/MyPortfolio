const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container text-center">
        <p className="mono text-sm text-muted-foreground">
          Designed & Built by <span className="text-primary">Prem Dhawan</span>
        </p>
        <p className="mono text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
