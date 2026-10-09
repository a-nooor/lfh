
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mail, Phone, Globe, MapPin, Clock, Send, Users, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-lfh-olive text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sink font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-roboto">
              Get in touch with Lebanese Film Harvest - we're here to support your filmmaking journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-sink font-bold text-lfh-olive mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8 font-roboto">
                Whether you're an emerging filmmaker seeking support, a mentor interested in contributing 
                to our community, or someone who shares our passion for Lebanese cinema, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lfh-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-lfh-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-sink font-bold text-lfh-olive mb-1">Phone</h3>
                    <p className="text-gray-600 font-roboto">+961 81 847224</p>
                    <p className="text-sm text-gray-500 font-roboto">Available Monday to Friday, 9 AM - 6 PM (Beirut Time)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lfh-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-lfh-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-sink font-bold text-lfh-olive mb-1">Email</h3>
                    <a href="mailto:info@lfh-lb.org" className="text-gray-600 hover:text-lfh-olive transition-colors font-roboto">
                      info@lfh-lb.org
                    </a>
                    <p className="text-sm text-gray-500 font-roboto">We respond to all inquiries within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lfh-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe size={24} className="text-lfh-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-sink font-bold text-lfh-olive mb-1">Website</h3>
                    <a href="https://lfh-lb.org" className="text-gray-600 hover:text-lfh-olive transition-colors font-roboto">
                      lfh-lb.org
                    </a>
                    <p className="text-sm text-gray-500 font-roboto">Visit our website for latest updates and resources</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lfh-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram size={24} className="text-lfh-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-sink font-bold text-lfh-olive mb-1">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/lebanesefilmharvest" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-lfh-olive transition-colors font-roboto"
                    >
                      @lebanesefilmharvest
                    </a>
                    <p className="text-sm text-gray-500 font-roboto">Follow us for updates and behind-the-scenes content</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lfh-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-lfh-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-sink font-bold text-lfh-olive mb-1">Location</h3>
                    <p className="text-gray-600 font-roboto">Lebanon</p>
                    <p className="text-sm text-gray-500 font-roboto">Serving filmmakers throughout Lebanon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-sink font-bold text-lfh-olive mb-6">Send Us a Message</h3>
              <form action="https://lfh-lb.org/contact.php" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lfh-olive focus:border-transparent font-roboto" placeholder="Your first name" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lfh-olive focus:border-transparent font-roboto" placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lfh-olive focus:border-transparent font-roboto" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lfh-olive focus:border-transparent font-roboto" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support Application</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="workshop">Workshop Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lfh-olive focus:border-transparent font-roboto" placeholder="Tell us about your project, goals, or how we can help you..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-lfh-olive text-white py-3 px-6 rounded-lg font-roboto font-semibold hover:bg-lfh-kombu transition-colors flex items-center justify-center">
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lfh-olive rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-sink font-bold text-lfh-olive mb-2">Office Hours</h3>
              <p className="text-gray-600 font-roboto">
                Monday - Friday<br />
                9:00 AM - 6:00 PM<br />
                Beirut Time (GMT+2)
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lfh-olive rounded-lg flex items-center justify-center mx-auto mb-4">
                <Send size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-sink font-bold text-lfh-olive mb-2">Response Time</h3>
              <p className="text-gray-600 font-roboto">
                We respond to all inquiries<br />
                within 24-48 hours<br />
                during business days
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lfh-olive rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-sink font-bold text-lfh-olive mb-2">Community</h3>
              <p className="text-gray-600 font-roboto">
                Join our network of<br />
                Lebanese filmmakers<br />
                and industry professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-lfh-olive text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-sink font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-200 mb-8 font-roboto">
            Whether you're ready to apply for support or just want to learn more about our programs, 
            we're here to help you take the next step in your filmmaking career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@lfh-lb.org" className="bg-lfh-yellow text-lfh-olive px-8 py-3 rounded-lg font-roboto font-semibold hover:bg-lfh-orange transition-colors">
              Contact Us Today
            </a>
            <a href="/programs" className="border-2 border-white text-white px-8 py-3 rounded-lg font-roboto font-semibold hover:bg-white hover:text-lfh-olive transition-colors">
              Learn About Programs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
