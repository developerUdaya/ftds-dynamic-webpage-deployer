import { Facebook, Twitter, Instagram, Linkedin, Github, Palette } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold text-white">ThemeForge</span>
            </div>
            <p className="mb-4 text-gray-400 max-w-md">
              Beautiful website themes for creators, businesses, and developers. Build stunning websites without the hassle.
            </p>
            <div className="flex space-x-4 mb-8">
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <FooterLink href="#themes">Themes</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#">Customization</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Updates</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Status</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ThemeForge. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a href={href} className="hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;