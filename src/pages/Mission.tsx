import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Target, Heart, Lightbulb, Handshake } from "lucide-react";

const Mission = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#566B30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sink font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-roboto">
              Dedicated to empowering Lebanese filmmakers through comprehensive support
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sink font-bold text-[#566B30] mb-8">
              Breaking Barriers, Building Futures
            </h2>
            <div className="bg-[#FFC817]/10 p-8 rounded-lg">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Lebanese Film Harvest is committed to supporting film students and emerging filmmakers 
                in Lebanon by providing essential financial assistance, professional mentorship, 
                skill development opportunities, and platforms for creative expression that enable 
                artistic growth and professional success in the Lebanese film industry.
              </p>
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#566B30] rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Financial Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We eliminate financial barriers by providing direct funding, equipment access, and 
                production resources that enable filmmakers to focus on their creative vision without 
                economic constraints limiting their artistic expression.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#566B30] rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Mentorship Program</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced industry professionals provide personalized guidance, career counseling, 
                and technical expertise to help emerging filmmakers navigate the industry and develop 
                their professional skills effectively.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#566B30] rounded-lg flex items-center justify-center mb-4">
                <Lightbulb size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Educational Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Through workshops, masterclasses, and training programs, we enhance technical skills, 
                creative techniques, and industry knowledge essential for professional growth in 
                contemporary filmmaking.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#566B30] rounded-lg flex items-center justify-center mb-4">
                <Handshake size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Platform Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                We establish showcases, festivals, and networking opportunities that connect filmmakers 
                with audiences, industry professionals, and potential collaborators, creating pathways 
                for career advancement.
              </p>
            </div>
          </div>

          {/* Core Commitments */}
          <div className="mb-12">
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-6">Our Core Commitments</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[#FFC817] pl-6">
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-2">Accessibility and Inclusion</h4>
                <p className="text-gray-600">
                  We ensure that our programs are accessible to filmmakers from diverse backgrounds, 
                  regardless of their economic circumstances, geographic location within Lebanon, or 
                  previous industry connections.
                </p>
              </div>

              <div className="border-l-4 border-[#FFC817] pl-6">
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-2">Professional Excellence</h4>
                <p className="text-gray-600">
                  We maintain high standards in all our programs and support services, ensuring that 
                  filmmakers receive professional-quality guidance and resources that meet industry standards.
                </p>
              </div>

              <div className="border-l-4 border-[#FFC817] pl-6">
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-2">Cultural Authenticity</h4>
                <p className="text-gray-600">
                  We celebrate and support authentic Lebanese storytelling while encouraging filmmakers 
                  to explore diverse themes and experimental approaches that reflect contemporary Lebanese experiences.
                </p>
              </div>

              <div className="border-l-4 border-[#FFC817] pl-6">
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-2">Sustainable Impact</h4>
                <p className="text-gray-600">
                  We focus on creating long-term positive change in the Lebanese film industry by building 
                  capacity, fostering community, and establishing systems that will continue to benefit 
                  future generations of filmmakers.
                </p>
              </div>
            </div>
          </div>

          {/* Mission in Action */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Our Mission in Action</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every aspect of Lebanese Film Harvest's work reflects our mission to break down barriers 
              and build opportunities. From our initial filmmaker outreach to our ongoing support programs, 
              we operate with the understanding that sustainable change requires comprehensive, sustained effort.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We measure our success not only by the individual achievements of supported filmmakers 
              but also by the overall growth and vitality of the Lebanese film community. Our mission 
              drives us to continuously adapt and expand our programs to meet the evolving needs of 
              emerging filmmakers while maintaining our commitment to excellence and authenticity.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
