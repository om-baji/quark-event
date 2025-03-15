import { useState } from "react";
import { Atom, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer id="contact" className="bg-gray-100 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" type="text" placeholder="Your name" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" placeholder="Your email" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input id="subject" type="text" placeholder="Message subject" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" placeholder="Your message" rows={4} className="w-full border px-3 py-2 rounded" onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Send Message</button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">Vishwakarma Institute Of Technology, Pune - 411037</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">envision@teamquark.org | info@teamquark.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (123) 456-7890 | +1 (987) 654-3210</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Twitter, href: "https://twitter.com" },
                  { Icon: Instagram, href: "https://instagram.com" },
                  { Icon: Linkedin, href: "https://linkedin.com" },
                  { Icon: Github, href: "https://github.com" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors inline-flex items-center justify-center"
                    aria-label="Link to social media"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Atom className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-bold text-lg">Team Quark</span>
            </div>
            <div className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Team Quark. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
