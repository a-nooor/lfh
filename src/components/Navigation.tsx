import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Vision",
    href: "/vision"
  }, {
    name: "Mission",
    href: "/mission"
  }, {
    name: "Programs",
    href: "/programs"
  }, {
    name: "Events",
    href: "/events"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (href: string) => location.pathname === href;
  return <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/e01667f1-6db2-4db4-9c07-824d87b5d50e.png" alt="Lebanese Film Harvest" className="h-10 w-auto object-cover" />
              <span className="text-lfh-olive font-sink font-bold text-xl">Lebanese Film Harvest</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2 text-sm font-roboto font-medium transition-colors duration-200 ${isActive(item.href) ? "text-lfh-yellow border-b-2 border-lfh-yellow" : "text-lfh-olive hover:text-lfh-yellow"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-lfh-olive hover:text-lfh-yellow transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 text-base font-roboto font-medium transition-colors duration-200 ${isActive(item.href) ? "text-lfh-yellow bg-gray-50" : "text-lfh-olive hover:text-lfh-yellow hover:bg-gray-50"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;