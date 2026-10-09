
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-lfh-olive text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sink font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-roboto">
              Discover our story and commitment to Lebanese cinema
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-sink font-bold text-lfh-olive mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
                Lebanese Film Harvest emerged from a deep understanding of the challenges facing emerging filmmakers in Lebanon. 
                Recognizing the immense talent within our creative community and the barriers that often prevent promising 
                filmmakers from realizing their potential, LFH was established as a catalyst for change in the Lebanese film industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
                Our organization serves as a bridge between aspiring filmmakers and the resources they need to succeed. 
                We understand that creativity knows no financial boundaries, yet financial constraints often limit 
                artistic expression and professional development in the film industry.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-sink font-bold text-lfh-olive mb-6">Our Impact</h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
                Since our inception, Lebanese Film Harvest has been instrumental in supporting numerous film projects, 
                providing mentorship to emerging talent, and creating platforms for Lebanese filmmakers to showcase 
                their work. Our comprehensive approach addresses both the immediate needs of filmmakers and the 
                long-term development of Lebanon's cinematic landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
                Through our programs, we have witnessed the transformation of creative ideas into compelling films 
                that reflect Lebanese culture, stories, and perspectives. Our supported filmmakers have gone on to 
                achieve recognition both locally and internationally, contributing to the growing reputation of 
                Lebanese cinema on the global stage.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-sink font-bold text-lfh-olive mb-6">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
                Lebanese Film Harvest operates on the principle that support should be comprehensive and sustained. 
                We don't just provide financial assistance; we offer mentorship, educational opportunities, networking 
                platforms, and showcase venues that create a complete ecosystem for filmmaker development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
                Our team consists of industry professionals, experienced filmmakers, and passionate advocates for 
                Lebanese cinema who understand the unique challenges and opportunities within our cultural context. 
                This expertise enables us to provide relevant, practical support that truly makes a difference 
                in the careers of emerging filmmakers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-sink font-bold text-lfh-olive mb-4">Why Lebanese Film Harvest Matters</h2>
              <p className="text-gray-600 leading-relaxed font-roboto">
                In a rapidly evolving global film industry, Lebanese voices and stories deserve to be heard. 
                LFH exists to ensure that financial barriers don't silence promising filmmakers or prevent 
                important stories from being told. We believe in the power of cinema to preserve culture, 
                challenge perspectives, and connect communities, and we are committed to fostering an 
                environment where Lebanese filmmakers can thrive and contribute to this important cultural dialogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
