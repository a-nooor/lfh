import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Camera, Globe, Users, Star } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#566B30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sink font-bold mb-6">Our Vision</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-roboto">
              Envisioning a thriving future for Lebanese cinema
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sink font-bold text-[#566B30] mb-8">
              A Vibrant Lebanese Film Industry
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-roboto">
              Lebanese Film Harvest envisions a future where Lebanon stands as a recognized center of 
              cinematic excellence in the Middle East and beyond, where emerging filmmakers have the 
              resources and support needed to transform their creative visions into compelling films 
              that resonate both locally and internationally.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Camera size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Creative Excellence</h3>
              <p className="text-gray-600 leading-relaxed font-roboto">
                We envision Lebanese filmmakers consistently producing high-quality, innovative films that 
                showcase the depth and diversity of Lebanese stories, culture, and artistic expression.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Global Recognition</h3>
              <p className="text-gray-600 leading-relaxed font-roboto">
                Lebanese films gaining international acclaim and representation at major film festivals 
                worldwide, establishing Lebanon as a significant contributor to global cinema.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Accessible Opportunities</h3>
              <p className="text-gray-600 leading-relaxed font-roboto">
                A film industry where talent and creativity are the primary determinants of success, 
                not financial resources, creating equal opportunities for all aspiring filmmakers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Star size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Sustainable Growth</h3>
              <p className="text-gray-600 leading-relaxed font-roboto">
                A self-sustaining ecosystem where successful filmmakers contribute back to the community, 
                creating a continuous cycle of support and mentorship for future generations.
              </p>
            </div>
          </div>

          {/* Long-term Vision */}
          <div className="bg-[#566B30] text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-sink font-bold mb-4">Our Long-Term Vision</h3>
            <p className="text-lg leading-relaxed mb-4 font-roboto">
              We see a future where Lebanese Film Harvest has established Lebanon as a regional hub for 
              film education, production, and distribution. Our vision includes the development of 
              comprehensive film infrastructure that supports not only individual filmmakers but also 
              the broader industry ecosystem.
            </p>
            <p className="text-lg leading-relaxed font-roboto">
              This includes fostering partnerships with international film organizations, creating 
              advanced educational programs, and establishing Lebanon as a preferred destination for 
              film co-productions and international collaborations.
            </p>
          </div>

          {/* Cultural Impact */}
          <div>
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-6">Cultural Preservation and Innovation</h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
              Our vision extends beyond commercial success to encompass the preservation and evolution 
              of Lebanese cultural narratives through film. We envision Lebanese cinema serving as a 
              bridge between Lebanon's rich cultural heritage and its contemporary identity, creating 
              films that honor the past while embracing innovation and modernity.
            </p>
            <p className="text-gray-600 leading-relaxed font-roboto">
              Through our supported filmmakers, we aim to contribute to a global understanding of 
              Lebanese culture, values, and perspectives, fostering cultural exchange and mutual 
              understanding through the universal language of cinema.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
