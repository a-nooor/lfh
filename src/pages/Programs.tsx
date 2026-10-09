import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { DollarSign, Users, BookOpen, Film, Award, Calendar } from "lucide-react";

const Programs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#566B30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sink font-bold mb-6">Programs & Support</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-roboto">
              Comprehensive support programs designed to empower Lebanese filmmakers
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sink font-bold text-[#566B30] mb-6">
              Supporting Every Stage of Your Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs address the diverse needs of emerging filmmakers, 
              from initial concept development to final film presentation.
            </p>
          </div>

          {/* Main Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Financial Assistance */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#FFC817] rounded-lg flex items-center justify-center mb-6">
                <DollarSign size={32} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Financial Assistance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our financial support program provides direct funding for film production, equipment 
                rental, post-production services, and other essential costs that often prevent talented 
                filmmakers from completing their projects.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Production grants for equipment and crew</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Post-production funding for editing and sound</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Distribution and marketing support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Emergency funding for unexpected costs</span>
                </div>
              </div>
            </div>

            {/* Mentorship Program */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#FFC817] rounded-lg flex items-center justify-center mb-6">
                <Users size={32} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Mentorship Program</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Connect with experienced industry professionals who provide personalized guidance, 
                career advice, and technical expertise throughout your filmmaking journey, helping 
                you navigate industry challenges and develop professional skills.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">One-on-one mentoring sessions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Script development guidance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Industry networking opportunities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Career development planning</span>
                </div>
              </div>
            </div>

            {/* Workshops & Training */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#FFC817] rounded-lg flex items-center justify-center mb-6">
                <BookOpen size={32} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Workshops & Training</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive educational programs covering technical skills, creative development, 
                and industry knowledge essential for contemporary filmmaking, led by expert practitioners 
                and industry professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Technical filmmaking masterclasses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Screenwriting and story development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Post-production and editing techniques</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Business and marketing for filmmakers</span>
                </div>
              </div>
            </div>

            {/* Film Showcase Platform */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#FFC817] rounded-lg flex items-center justify-center mb-6">
                <Film size={32} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Film Showcase Platform</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Present your completed films to audiences, industry professionals, and potential 
                collaborators through our curated showcase events, screenings, and festival 
                participation opportunities.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Quarterly film screening events</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Festival submission guidance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Industry networking events</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFC817] rounded-full mt-2"></div>
                  <span className="text-gray-600">Online platform for film promotion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Support Services */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-6 text-center">Additional Support Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#566B30] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-2">Recognition Programs</h4>
                <p className="text-gray-600">
                  Awards and recognition for outstanding achievements in Lebanese filmmaking
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#566B30] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-2">Annual Festival</h4>
                <p className="text-gray-600">
                  Our signature annual festival celebrating Lebanese cinema and emerging talent
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#566B30] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-2">Community Building</h4>
                <p className="text-gray-600">
                  Networking events and community programs that connect Lebanese filmmakers
                </p>
              </div>
            </div>
          </div>

          {/* Program Impact */}
          <div className="text-center">
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-6">Program Impact</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive programs work together to create a supportive ecosystem that addresses 
              the multifaceted challenges facing emerging filmmakers. By providing financial resources, 
              educational opportunities, professional guidance, and presentation platforms, we enable 
              filmmakers to focus on their creative vision while developing the skills and connections 
              necessary for long-term success in the film industry.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
