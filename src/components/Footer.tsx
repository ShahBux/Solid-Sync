import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-primary">Solid</span>Sync
            </h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Leading Telecom Engineering & Services company providing comprehensive solutions for GSM & Telecom infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Tower Installation</li>
              <li>Fiber Optics</li>
              <li>Site Survey & Inspection</li>
              <li>Power Installations</li>
              <li>Operation & Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Karachi, 75300, Pakistan
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +92 333-222-8213
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@solidsync.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} SolidSync. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
