
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, Users, Award, Video, Coffee, BookOpen } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#566B30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sink font-bold mb-6">Events</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-roboto">
              Celebrating Lebanese cinema through festivals, screenings, and educational events
            </p>
          </div>
        </div>
      </section>

      {/* Tickets and Submissions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f9fafb] py-10 px-6 rounded-lg text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-sink font-bold text-[#566B30] mb-4">
              🎟️ Get Your Tickets
            </h2>
            <p className="text-lg font-roboto text-gray-700 mb-4">
              Join us on August 15, 16 & 17 at the MEA Auditorium for three days of incredible student films.
            </p>
            <a
              href="https://ihjoz.com/events/8494"
              target="_blank"
              className="inline-block bg-[#FFC817] text-[#566B30] font-bold px-6 py-3 rounded-lg shadow hover:bg-[#FAA41A] transition"
            >
              Get Tickets on Ihjoz
            </a>

            <hr className="my-8 border-gray-300" />

            <h2 className="text-2xl font-sink font-bold text-[#566B30] mb-4">
              🎬 Submissions Are Now Open
            </h2>
            <p className="text-lg font-roboto text-gray-700 mb-4">
              Are you a student filmmaker? Submit your work now to be part of the Lebanese Film Harvest Festival.
            </p>
            <a
              href="https://filmfreeway.com/LebaneseFilmHarvest"
              target="_blank"
              className="inline-block bg-[#FFC817] text-[#566B30] font-bold px-6 py-3 rounded-lg shadow hover:bg-[#FAA41A] transition"
            >
              Submit via FilmFreeway
            </a>

            <div className="mt-6 text-sm text-gray-600">
              Follow us on Instagram:
              <a href="https://www.instagram.com/p/DLsRyDisPgl/?igsh=MW5pZzB2MGZyMHA0bw==" target="_blank" className="underline text-[#566B30] ml-1">
                @lebanesefilmharvest
              </a><br/>
              Join our WhatsApp Channel:
              <a href="https://whatsapp.com/channel/0029VbAjfvoJf05jnX4XII1G" target="_blank" className="underline text-[#566B30] ml-1">
                Click here
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Schedule */}
      <section id="festival-schedule" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sink font-bold text-[#566B30] mb-6">
              Festival Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three days of incredible student films, industry panels, and networking opportunities at the MEA Auditorium.
            </p>
          </div>

          {/* Day 1 - Friday */}
          <div className="mb-16">
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-8 text-center">
              Day 1 – Friday, August 15
            </h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Red Carpet</h4>
                  <p className="font-roboto text-gray-600">3:00 PM – 4:30 PM</p>
                </div>
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Opening Ceremony</h4>
                  <p className="font-roboto text-gray-600">5:00 PM – 6:00 PM</p>
                </div>
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Film Screenings</h4>
                  <p className="font-roboto text-gray-600">6:00 PM – 8:00 PM</p>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-[#566B30] rounded-lg">
                  <thead>
                    <tr className="bg-[#FFC817]">
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Film Title</th>
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['TURMOIL', '20:00'],
                      ['Somewhere I Belong', '21:06'],
                      ['Snake Hill', '25:00'],
                      ['The Ant That Crossed My Sketchbook', '19:52'],
                      ['Invisible Scars', '19:33'],
                      ['Stuck in Reverse', '14:27']
                    ].map(([title, duration], index) => (
                      <tr key={index} className="border-b border-[#566B30]/20">
                        <td className="px-4 py-3 font-roboto text-gray-700">{title}</td>
                        <td className="px-4 py-3 font-roboto text-gray-700">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-center mb-6">
                <h4 className="font-sink font-bold text-[#566B30] mb-2">Break & Networking</h4>
                <p className="font-roboto text-gray-600">8:00 PM – 8:30 PM</p>
              </div>

              <div className="text-center mb-4">
                <h4 className="font-sink font-bold text-[#566B30] mb-2">Film Screenings</h4>
                <p className="font-roboto text-gray-600">8:30 PM – 10:00 PM</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border border-[#566B30] rounded-lg">
                  <thead>
                    <tr className="bg-[#FFC817]">
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Film Title</th>
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['The Nail', '19:30'],
                      ['The Taste of Honey', '19:22'],
                      ['Two Dead Leaves', '18:39'],
                      ['Far From It', '18:26'],
                      ['Shutter', '13:20']
                    ].map(([title, duration], index) => (
                      <tr key={index} className="border-b border-[#566B30]/20">
                        <td className="px-4 py-3 font-roboto text-gray-700">{title}</td>
                        <td className="px-4 py-3 font-roboto text-gray-700">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Day 2 - Saturday */}
          <div className="mb-16">
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-8 text-center">
              Day 2 – Saturday, August 16
            </h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Industry Panels</h4>
                  <p className="font-roboto text-gray-600">12:00 PM – 4:00 PM</p>
                </div>
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Break & Networking</h4>
                  <p className="font-roboto text-gray-600">4:00 PM – 5:00 PM</p>
                </div>
              </div>

              <div className="text-center mb-4">
                <h4 className="font-sink font-bold text-[#566B30] mb-2">Film Screenings</h4>
                <p className="font-roboto text-gray-600">5:00 PM – 7:00 PM</p>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-[#566B30] rounded-lg">
                  <thead>
                    <tr className="bg-[#FFC817]">
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Film Title</th>
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Costi', '18:00'],
                      ['A Step', '17:00'],
                      ['54', '16:27'],
                      ['Donkey Skin', '15:58'],
                      ['Home', '15:52'],
                      ['Mind Palace', '15:15'],
                      ['Meters Away', '15:00'],
                      ['Red Wine', '5:00']
                    ].map(([title, duration], index) => (
                      <tr key={index} className="border-b border-[#566B30]/20">
                        <td className="px-4 py-3 font-roboto text-gray-700">{title}</td>
                        <td className="px-4 py-3 font-roboto text-gray-700">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-center mb-6">
                <h4 className="font-sink font-bold text-[#566B30] mb-2">Break & Networking</h4>
                <p className="font-roboto text-gray-600">7:00 PM – 7:30 PM</p>
              </div>

              <div className="text-center mb-4">
                <h4 className="font-sink font-bold text-[#566B30] mb-2">Film Screenings</h4>
                <p className="font-roboto text-gray-600">7:30 PM – 10:00 PM</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border border-[#566B30] rounded-lg">
                  <thead>
                    <tr className="bg-[#FFC817]">
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Film Title</th>
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Dead While Living', '14:09'],
                      ['Ismail & Yosra', '14:03'],
                      ['Jelnar', '13:06'],
                      ['Family', '12:30'],
                      ['Death Per Second', '12:00'],
                      ['Notfa', '11:26'],
                      ['Mihd', '11:10'],
                      ['Death & Other Fears', '10:45'],
                      ['Dahnoun', '10:17'],
                      ['A City With No Birds', '9:08'],
                      ['Layla', '9:00'],
                      ['Tent', '8:32']
                    ].map(([title, duration], index) => (
                      <tr key={index} className="border-b border-[#566B30]/20">
                        <td className="px-4 py-3 font-roboto text-gray-700">{title}</td>
                        <td className="px-4 py-3 font-roboto text-gray-700">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Day 3 - Sunday */}
          <div className="mb-16">
            <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-8 text-center">
              Day 3 – Sunday, August 17
            </h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-4">
                <h4 className="font-sink font-bold text-[#566B30] mb-2">Film Screenings</h4>
                <p className="font-roboto text-gray-600">5:00 PM – 6:30 PM</p>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-[#566B30] rounded-lg">
                  <thead>
                    <tr className="bg-[#FFC817]">
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Film Title</th>
                      <th className="px-4 py-3 text-left font-sink font-bold text-[#566B30] border-b border-[#566B30]">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Echoes', '8:39'],
                      ['Suicide Rendezvous', '5:00'],
                      ['Flood', '8:20'],
                      ['The Providence of Becoming', '7:49'],
                      ['Maelstorm', '7:15'],
                      ['Trip', '7:11'],
                      ['Barak (HolyDog)', '7:08'],
                      ['Under the Sun', '7:06'],
                      ['The Key', '6:34'],
                      ['We Have a Promise', '4:43'],
                      ['Just One Touch', '3:35'],
                      ['Rebirth', '3:30'],
                      ['Nerida', '3:00'],
                      ['Movement', '3:00'],
                      ['How to Film an Alien', '2:37'],
                      ['Everything and in Between', '2:32'],
                      ['Fayrouz', '9:00'],
                      ['It Takes Winter to Spring', '8:27']
                    ].map(([title, duration], index) => (
                      <tr key={index} className="border-b border-[#566B30]/20">
                        <td className="px-4 py-3 font-roboto text-gray-700">{title}</td>
                        <td className="px-4 py-3 font-roboto text-gray-700">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Break & Networking</h4>
                  <p className="font-roboto text-gray-600">6:30 PM – 7:30 PM</p>
                </div>
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Awards Distribution</h4>
                  <p className="font-roboto text-gray-600">7:30 PM – 8:30 PM</p>
                </div>
                <div className="text-center">
                  <h4 className="font-sink font-bold text-[#566B30] mb-2">Closing Ceremony</h4>
                  <p className="font-roboto text-gray-600">8:30 PM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Festival */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sink font-bold text-[#566B30] mb-6">
              Lebanese Film Harvest Annual Festival
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our flagship annual festival is the cornerstone event that brings together the Lebanese 
              film community to celebrate achievements, showcase new talent, and foster industry connections.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFC817]/10 to-[#566B30]/10 p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-sink font-bold text-[#566B30] mb-4">Festival Highlights</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A multi-day celebration featuring film screenings, panel discussions, networking 
                  events, and award ceremonies that recognize excellence in Lebanese filmmaking. 
                  The festival serves as both a showcase for completed works and a platform for 
                  industry networking and collaboration.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Each year, the festival features a diverse selection of films from emerging 
                  Lebanese filmmakers, providing them with the opportunity to present their work 
                  to audiences, critics, and industry professionals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-sink font-bold text-[#566B30] mb-4">Festival Components</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Video size={20} className="text-[#FFC817]" />
                    <span className="text-gray-600">Film screenings and premieres</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award size={20} className="text-[#FFC817]" />
                    <span className="text-gray-600">Awards ceremony</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users size={20} className="text-[#FFC817]" />
                    <span className="text-gray-600">Industry panels and discussions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee size={20} className="text-[#FFC817]" />
                    <span className="text-gray-600">Networking receptions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-sink font-bold text-[#566B30] mb-12 text-center">
            Regular Events & Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quarterly Screenings */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Video size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-xl font-sink font-bold text-[#566B30] mb-4">Quarterly Screenings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regular film screening events held every quarter to showcase recent works by 
                LFH-supported filmmakers and provide ongoing opportunities for audience engagement.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Featured filmmaker presentations</li>
                <li>• Audience Q&A sessions</li>
                <li>• Industry networking</li>
                <li>• Film discussion panels</li>
              </ul>
            </div>

            {/* Educational Workshops */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-xl font-sink font-bold text-[#566B30] mb-4">Educational Workshops</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Monthly workshops and masterclasses covering various aspects of filmmaking, 
                from technical skills to creative development and industry business practices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Technical masterclasses</li>
                <li>• Creative development sessions</li>
                <li>• Industry expert presentations</li>
                <li>• Hands-on training programs</li>
              </ul>
            </div>

            {/* Networking Events */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-xl font-sink font-bold text-[#566B30] mb-4">Networking Events</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regular networking gatherings designed to connect filmmakers with peers, 
                mentors, industry professionals, and potential collaborators in the Lebanese film community.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Monthly filmmaker meetups</li>
                <li>• Industry professional mixers</li>
                <li>• Collaboration forums</li>
                <li>• Mentor-mentee connections</li>
              </ul>
            </div>

            {/* Panel Discussions */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Coffee size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-xl font-sink font-bold text-[#566B30] mb-4">Panel Discussions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Expert panels featuring industry professionals discussing current trends, 
                challenges, and opportunities in Lebanese and international cinema.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Industry trend analysis</li>
                <li>• Career development guidance</li>
                <li>• International market insights</li>
                <li>• Technology and innovation forums</li>
              </ul>
            </div>

            {/* Special Presentations */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Award size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-xl font-sink font-bold text-[#566B30] mb-4">Special Presentations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Exclusive events featuring renowned Lebanese filmmakers, international guests, 
                and special screenings of significant works in Lebanese cinema.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Guest filmmaker visits</li>
                <li>• Retrospective screenings</li>
                <li>• International collaborations</li>
                <li>• Cultural celebration events</li>
              </ul>
            </div>

            {/* Community Gatherings */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFC817] rounded-lg flex items-center justify-center mb-4">
                <Calendar size={24} className="text-[#566B30]" />
              </div>
              <h3 className="text-xl font-sink font-bold text-[#566B30] mb-4">Community Gatherings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Informal community events that strengthen bonds within the Lebanese film community 
                and provide relaxed environments for creative exchange and collaboration.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Casual filmmaker meetups</li>
                <li>• Creative collaboration sessions</li>
                <li>• Cultural appreciation events</li>
                <li>• Community celebration gatherings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Philosophy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-sink font-bold text-[#566B30] mb-8">Our Event Philosophy</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every Lebanese Film Harvest event is designed with the core purpose of fostering 
              community, facilitating learning, and creating opportunities for professional growth. 
              Our events serve as catalysts for collaboration, platforms for recognition, and 
              spaces for meaningful exchange within the Lebanese film community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that bringing filmmakers together in various formats—from formal festivals 
              to casual networking gatherings—creates an ecosystem where creativity thrives, 
              professional relationships develop, and the Lebanese film industry grows stronger 
              through collective effort and shared vision.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
