import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xanerqrk", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "We've received your message and will respond soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to connect to form service.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-theme-black">
      <Header />
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-theme-darkGray rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-theme-orange mb-4">Get in Touch</h2>
                <p className="text-white/80 mb-6">
                  We're here to answer any questions you may have about India's digital initiatives.
                  Feel free to reach out to us with your inquiries, feedback, or collaboration proposals.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-theme-orange p-2 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-theme-orange">contact@indiadigitalvision.gov.in</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-theme-orange p-2 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-theme-orange">+91 8904440075</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-theme-orange p-2 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Address</h3>
                      <p className="text-white/80">
                        RV University <br />
                        RVCE Post Mysore Road <br />
                        Bangalore - 560059, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-theme-darkGray rounded-lg p-8">
                <h2 className="text-2xl font-bold text-theme-orange mb-4">Office Hours</h2>
                <div className="space-y-2 text-white/80">
                  <p>Monday - Friday: 9:30 AM to 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p>Government Holidays: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-theme-darkGray rounded-lg p-8">
              <h2 className="text-2xl font-bold text-theme-orange mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-theme-gray border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-theme-orange"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-theme-gray border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-theme-orange"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-theme-gray border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-theme-orange"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded bg-theme-gray border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-theme-orange"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-theme-orange text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;