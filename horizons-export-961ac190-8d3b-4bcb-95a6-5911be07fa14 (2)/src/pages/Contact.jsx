
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Youtube, Send, Music, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📧 Message Sent",
      description: "🚧 Contact form submission isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/mattiejamesmusic',
      color: 'hover:text-pink-400'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://facebook.com/mattiejamesmusic',
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/mattiejamesmusic',
      color: 'hover:text-red-400'
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mattiejamesmusic@gmx.co.uk',
      description: 'For bookings, licensing, and general inquiries'
    },
    {
      icon: Music,
      title: 'Music Licensing',
      value: 'Sync & Commercial Use',
      description: 'PRS/MCPS affiliated with one-stop licensing'
    },
    {
      icon: Phone,
      title: 'Live Bookings',
      value: 'Performance Inquiries',
      description: 'Jazz vocals, guitar, and bass performances'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Mattie James Music</title>
        <meta name="description" content="Get in touch with Mattie James for music licensing, live performance bookings, and collaboration opportunities. Email: mattiejamesmusic@gmx.co.uk" />
      </Helmet>

      <div className="pt-16">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="playfair text-5xl md:text-6xl font-bold mb-6 jazz-text-gradient">
                Let's Connect
              </h1>
              <p className="text-xl text-amber-200/80 max-w-3xl mx-auto mb-8">
                Ready to collaborate, book a performance, or license music? I'd love to hear from you. 
                Let's create something beautiful together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-lg p-6 text-center hover-lift"
                >
                  <div className="w-16 h-16 jazz-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-300">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium mb-2 text-amber-100">
                    {method.value}
                  </p>
                  <p className="text-amber-200/80 text-sm">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-lg p-8"
              >
                <h2 className="playfair text-3xl font-bold mb-6 jazz-text-gradient">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-orange-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-amber-950/20 border border-orange-400/30 rounded-lg text-amber-100 placeholder-amber-200/50 focus:outline-none focus:border-orange-400 transition-colors duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-orange-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-amber-950/20 border border-orange-400/30 rounded-lg text-amber-100 placeholder-amber-200/50 focus:outline-none focus:border-orange-400 transition-colors duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-orange-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-amber-950/20 border border-orange-400/30 rounded-lg text-amber-100 focus:outline-none focus:border-orange-400 transition-colors duration-300"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="licensing">Music Licensing</option>
                      <option value="booking">Live Performance Booking</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-orange-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-amber-950/20 border border-orange-400/30 rounded-lg text-amber-100 placeholder-amber-200/50 focus:outline-none focus:border-orange-400 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full jazz-gradient hover:scale-105 transition-transform duration-300 py-3 text-lg font-medium"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Direct Contact */}
                <div className="glass-effect rounded-lg p-8">
                  <h3 className="playfair text-2xl font-bold mb-6 jazz-text-gradient">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 jazz-gradient rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-orange-300">Email</p>
                        <a 
                          href="mailto:mattiejamesmusic@gmx.co.uk"
                          className="text-amber-100 hover:text-orange-300 transition-colors duration-300"
                        >
                          mattiejamesmusic@gmx.co.uk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="glass-effect rounded-lg p-8">
                  <h3 className="playfair text-2xl font-bold mb-6 jazz-text-gradient">
                    Follow the Journey
                  </h3>
                  <p className="text-amber-200/80 mb-6">
                    Stay connected for the latest performances, releases, and behind-the-scenes content.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-amber-950/30 border border-orange-400/30 rounded-lg flex items-center justify-center text-amber-200 ${social.color} transition-all duration-300 hover:scale-110 hover:border-orange-400`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Professional Services */}
                <div className="glass-effect rounded-lg p-8">
                  <h3 className="playfair text-2xl font-bold mb-6 jazz-text-gradient">
                    Professional Services
                  </h3>
                  <div className="space-y-4 text-amber-200/80">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 jazz-gradient rounded-full mt-2"></div>
                      <p>Sync licensing for film, TV, and advertising</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 jazz-gradient rounded-full mt-2"></div>
                      <p>Live performances for events and venues</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 jazz-gradient rounded-full mt-2"></div>
                      <p>Custom compositions and arrangements</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 jazz-gradient rounded-full mt-2"></div>
                      <p>Session work and collaborations</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-950/50 to-orange-950/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 jazz-text-gradient">
                Quick Response Guaranteed
              </h2>
              <p className="text-lg text-amber-200/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                I understand that timing is crucial in the music industry. You can expect a response 
                to your inquiry within 24 hours, often much sooner. Let's make music happen!
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold jazz-text-gradient">24hrs</div>
                  <div className="text-amber-200/80">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold jazz-text-gradient">100%</div>
                  <div className="text-amber-200/80">Professional</div>
                </div>
                <div>
                  <div className="text-3xl font-bold jazz-text-gradient">∞</div>
                  <div className="text-amber-200/80">Creative Possibilities</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
