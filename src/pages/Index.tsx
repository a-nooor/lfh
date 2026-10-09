
import { Link } from "react-router-dom";
import { ArrowRight, Film, Users, Award, Calendar } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-lfh-olive text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <img 
              src="/lovable-uploads/de076882-e05d-4ab5-a563-09c5f809b4ee.png" 
              alt="Something Big is Coming to Beirut - Lebanese Film Harvest" 
              className="w-full max-w-4xl mx-auto h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Combined CTA Banner */}
      <div className="text-center py-12 bg-[#566B30] text-white">
        <h2 className="text-2xl md:text-3xl font-sink font-bold mb-4">
          Join the Lebanese Film Harvest Festival
        </h2>
        <p className="text-lg font-roboto mb-6">
          Submit your film or grab your seat — be part of the story.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/events#festival-schedule"
            className="px-6 py-3 bg-[#FFC817] text-[#566B30] font-bold rounded-lg shadow-md hover:bg-[#FAA41A] transition font-sink"
          >
            Festival Schedule
          </Link>
          <a
            href="https://ihjoz.com/events/8494"
            target="_blank"
            className="px-6 py-3 bg-white text-[#566B30] font-bold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Tickets on Ihjoz
          </a>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sink font-bold text-lfh-olive mb-4 px-2">
              Supporting Lebanese Cinema
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-roboto px-4">
              LFH is dedicated to breaking financial barriers and fostering creative growth in Lebanon's film industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mx-2 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-lfh-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Film size={24} className="text-lfh-olive sm:hidden" />
                <Film size={32} className="text-lfh-olive hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-sink font-bold text-lfh-olive mb-2">Financial Support</h3>
              <p className="text-sm sm:text-base text-gray-600 font-roboto">
                Breaking financial barriers for emerging filmmakers
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mx-2 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-lfh-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users size={24} className="text-lfh-olive sm:hidden" />
                <Users size={32} className="text-lfh-olive hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-sink font-bold text-lfh-olive mb-2">Mentorship</h3>
              <p className="text-sm sm:text-base text-gray-600 font-roboto">
                Guidance from industry professionals and experienced filmmakers
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mx-2 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-lfh-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award size={24} className="text-lfh-olive sm:hidden" />
                <Award size={32} className="text-lfh-olive hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-sink font-bold text-lfh-olive mb-2">Workshops</h3>
              <p className="text-sm sm:text-base text-gray-600 font-roboto">
                Skill development and technical training opportunities
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mx-2 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-lfh-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar size={24} className="text-lfh-olive sm:hidden" />
                <Calendar size={32} className="text-lfh-olive hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-sink font-bold text-lfh-olive mb-2">Film Showcase</h3>
              <p className="text-sm sm:text-base text-gray-600 font-roboto">
                Platform to present and celebrate Lebanese cinematic talent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sink font-bold text-lfh-olive mb-6 sm:mb-8 px-2">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-roboto px-4">
              Lebanese Film Harvest is committed to supporting film students and emerging filmmakers in Lebanon 
              by providing essential resources, mentorship, and platforms that enable creative expression and 
              professional growth in the Lebanese film industry.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link to="/mission" className="bg-lfh-olive text-white px-6 sm:px-8 py-3 rounded-lg font-roboto font-semibold hover:bg-lfh-kombu transition-colors inline-flex items-center text-sm sm:text-base">
                Read Our Full Mission <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
