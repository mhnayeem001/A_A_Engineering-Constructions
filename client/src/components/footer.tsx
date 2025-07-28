import { Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-white text-gray-900 py-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent mb-3">
              A.A. Engineering
            </h2>
            <p className="text-xl font-semibold text-cyan-600 mb-6">& Constructions</p>
            <p className="text-gray-700 max-w-lg mb-8 leading-relaxed">
              “Let the Future of Structure Be Risk-Free” — Professional building solutions
              with safety, expertise, and excellence.
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Licensed Engineer: Engr. Mahabub Hossain Sabuj (MIEB)</p>
              <p>50+ Successful Projects Completed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-300 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-cyan-600 transition-colors font-medium w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-300 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-600" />
                <span className="font-medium">+880 17 1407 6190</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-600" />
                <span className="font-medium">aaec.gazipur20@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-600" />
                <span className="font-medium">Gazipur, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-gray-600 text-sm font-light select-none">
          &copy; 2025 A.A. Engineering & Constructions. All rights reserved. | MIEB Licensed Professional Engineers
        </div>
      </div>
    </footer>
  );
}