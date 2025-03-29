'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isBusiness: false,
    companyName: '',
    contactName: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1b1e] border-b border-[#2a2b2e]">
        <div className="flex items-center justify-between px-6 h-16">
          <a href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-300 hover:to-purple-500 transition-colors">
            PekkaAI
          </a>
          <div className="flex items-center gap-6">
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="/contact" className="text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">Contact Us</h1>
              <p className="text-xl text-gray-300">
                Have questions or want to get featured? We'd love to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#2a2b2e] rounded-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isBusiness"
                    name="isBusiness"
                    checked={formData.isBusiness}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500 bg-[#1a1b1e]"
                  />
                  <label htmlFor="isBusiness" className="text-sm font-medium text-gray-300">
                    This is a business inquiry
                  </label>
                </div>

                {formData.isBusiness ? (
                  <>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#1a1b1e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#1a1b1e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#1a1b1e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1b1e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1b1e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {formData.isBusiness ? 'Tell us about your AI tool' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1b1e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  {formData.isBusiness ? 'Submit for Review' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1b1e] border-t border-[#2a2b2e] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4">PekkaAI</h3>
              <p className="text-gray-400 text-sm">
                Your gateway to the best AI tools for creativity and productivity.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/tools" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/tools?category=trending" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Trending
                  </a>
                </li>
                <li>
                  <a href="/tools?category=chatbots" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Chatbots
                  </a>
                </li>
                <li>
                  <a href="/tools?category=art-design" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Art & Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2a2b2e] pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 PekkaAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 