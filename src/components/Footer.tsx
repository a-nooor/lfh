import { Mail, Phone, Globe, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-lfh-olive text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/e01667f1-6db2-4db4-9c07-824d87b5d50e.png" alt="Lebanese Film Harvest" className="h-10 w-auto object-cover" />
              <span className="font-sink font-bold text-xl">Lebanese Film Harvest</span>
            </div>
            <p className="text-gray-200 font-roboto mb-4">
              Empowering emerging Lebanese filmmakers through financial support, mentorship, and creative opportunities.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-sink font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 font-roboto">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-lfh-yellow" />
                <span>+961 81 847224</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-lfh-yellow" />
                <a href="mailto:info@lfh-lb.org" className="hover:text-lfh-yellow transition-colors">
                  info@lfh-lb.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={18} className="text-lfh-yellow" />
                <a href="https://lfh-lb.org" className="hover:text-lfh-yellow transition-colors">
                  lfh-lb.org
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-sink font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lebanesefilmharvest" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-lfh-yellow transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-200 font-roboto mb-2 sm:mb-0">© Lebanese Film Harvest. All rights reserved.</p>
            <p className="text-gray-200 font-roboto text-sm">
              Powered by {" "}
              <a
                href="https://aynbeirut.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-200 font-semibold"
              >
                AYN BEIRUT
              </a>{" "}
              for LFH © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;