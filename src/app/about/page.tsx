'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/pekkalogo.png"
                  alt="PekkaAI Logo"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text group-hover:from-purple-500 group-hover:via-pink-600 group-hover:to-red-600 transition-all duration-300 group-hover:scale-105">
                PekkaAI
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">About PekkaAI</h1>
              <p className="text-xl text-gray-300">
                Your trusted source for discovering and comparing AI tools
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#2a2b2e] to-purple-900/20 rounded-lg p-8 border border-purple-500/10"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  PekkaAI aims to simplify the discovery of AI tools by providing a comprehensive, 
                  user-friendly platform where creators, developers, and businesses can find the perfect 
                  AI solutions for their needs. We curate and review the latest AI tools, ensuring our 
                  community has access to the most reliable and innovative solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[#2a2b2e] to-purple-900/20 rounded-lg p-8 border border-purple-500/10"
              >
                <h2 className="text-2xl font-bold text-white mb-4">What We Offer</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Comprehensive AI tool directory with detailed reviews and comparisons
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    User-friendly categorization and search functionality
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Regular updates on the latest AI tools and industry trends
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Community-driven platform for sharing experiences and insights
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[#2a2b2e] to-purple-900/20 rounded-lg p-8 border border-purple-500/10"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-2">Transparency</h3>
                    <p className="text-gray-300">
                      We provide honest, unbiased reviews and clear information about AI tools.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-2">Quality</h3>
                    <p className="text-gray-300">
                      We carefully curate and verify each tool to ensure high standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-2">Community</h3>
                    <p className="text-gray-300">
                      We foster a collaborative environment for sharing knowledge and experiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-2">Innovation</h3>
                    <p className="text-gray-300">
                      We stay at the forefront of AI technology to bring you the latest tools.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
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
                  <a
                    href="https://twitter.com/pekkaai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/pekkaai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
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