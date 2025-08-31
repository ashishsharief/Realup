import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Left Column - Brand */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold">RealUp</h3>
                <p className="text-xl text-background/80">
                  Fueling Mysore's Startup Scene
                </p>
              </div>
              
              <p className="text-background/70 leading-relaxed text-lg">
                Join Mysore's first startup community and be part of building 
                an ecosystem where innovation thrives and entrepreneurs succeed.
              </p>

              {/* Contact Email */}
              <div className="flex items-center space-x-4 text-background/80">
                <Mail className="w-6 h-6" />
                <a 
                  href="mailto:hello@realup.in" 
                  className="hover:text-background transition-colors text-lg"
                >
                  hello@realup.in
                </a>
              </div>
            </div>

            {/* Right Column - Links & Social */}
            <div className="space-y-10">
              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold">Quick Links</h4>
                <nav className="flex flex-col space-y-3">
                  <a 
                    href="#"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-background/80 hover:text-background transition-colors w-fit text-lg"
                  >
                    Home
                  </a>
                  <a 
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-background/80 hover:text-background transition-colors w-fit text-lg"
                  >
                    About
                  </a>
                  <a 
                    href="#contact"
                    className="text-background/80 hover:text-background transition-colors w-fit text-lg"
                  >
                    Contact
                  </a>
                </nav>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="flex items-center justify-center w-12 h-12 bg-background/10 rounded-2xl hover:bg-background/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-12 h-12 bg-background/10 rounded-2xl hover:bg-background/20 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mb-10 pt-8 border-t border-background/20">
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/legal" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-background/70 hover:text-background transition-colors text-lg"
              >
                Terms and Conditions
              </Link>
              <Link 
                to="/legal#cancellations" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-background/70 hover:text-background transition-colors text-lg"
              >
                Cancellations and Refunds
              </Link>
              <Link 
                to="/legal#privacy" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-background/70 hover:text-background transition-colors text-lg"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <p className="text-background/60 text-base">
                © 2024 RealUp. Building Mysore's startup future.
              </p>
              <p className="text-background/60 text-base">
                Made with ❤️ for the Mysore startup community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;