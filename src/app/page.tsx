'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { categories, aiTools } from '../data/ai-tools';
import { searchTools } from '../utils/search';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredTools = aiTools.filter(tool => {
    const category = categories.find(c => c.id === tool.category);
    const categoryName = category ? category.name.toLowerCase() : '';
    
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase())) ||
      categoryName.includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const searchResults = searchQuery ? searchTools(aiTools, searchQuery) : [];

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1b1e] border-b border-[#2a2b2e]">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-[#2a2b2e] transition-colors"
            >
              {isSidebarOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-400" />
              )}
            </button>
            <a href="/" className="ml-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:from-purple-300 hover:via-purple-400 hover:to-purple-500 transition-all duration-300 hover:scale-105">
              PekkaAI
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.aside
        initial={{ width: isSidebarOpen ? 280 : 0 }}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 bottom-0 bg-[#1a1b1e] border-r border-[#2a2b2e] overflow-hidden"
      >
        <div className="p-4 space-y-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#2a2b2e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-400 px-2">Categories</h3>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-purple-600/20 text-white border border-purple-500/30'
                    : 'text-gray-400 hover:bg-[#2a2b2e] hover:text-white'
                }`}
              >
                <span className="mr-2 flex-shrink-0">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${isSidebarOpen ? 'pl-72' : 'pl-0'}`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4"
            >
              Discover the Best AI Tools
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Find the perfect AI tools to supercharge your creativity and productivity
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search for AI tools or categories..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-[#2a2b2e] border border-[#3a3b3e] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-[#2a2b2e] rounded-lg border border-[#3a3b3e] max-h-[400px] overflow-y-auto"
                >
                  <div className="p-4">
                    <div className="text-sm text-gray-400 mb-2">
                      Found {searchResults.length} results
                    </div>
                    <div className="space-y-2">
                      {searchResults.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/tools?search=${encodeURIComponent(tool.name)}`}
                          className="flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-[#3a3b3e] hover:text-white transition-colors"
                        >
                          <div className="w-12 h-12 relative rounded-md overflow-hidden">
                            <Image
                              src={tool.imageUrl}
                              alt={tool.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{tool.name}</div>
                            <div className="text-sm text-gray-500">{tool.description}</div>
                            <div className="flex gap-2 mt-1">
                              {tool.features.slice(0, 2).map((feature, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-0.5 bg-[#3a3b3e] rounded-full text-xs text-gray-300"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* AI Tools Grid */}
        <section className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse bg-[#2a2b2e] rounded-lg h-[400px]"
                  />
                ))
              ) : (
                filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools?search=${encodeURIComponent(tool.name)}`}
                    className="group"
                  >
                    <div className="hover-card rounded-lg overflow-hidden">
                      <div className="card-image-wrapper">
                        <Image
                          src={tool.imageUrl}
                          alt={tool.name}
                          width={400}
                          height={200}
                          className="card-image"
                        />
                        <div className="image-overlay absolute inset-0" />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{tool.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {tool.features.slice(0, 3).map((feature, index) => (
                            <Link
                              key={index}
                              href={`/tools?category=${encodeURIComponent(tool.category)}`}
                              onClick={(e) => e.stopPropagation()}
                              className="px-2 py-0.5 bg-purple-900/30 rounded-full text-xs text-purple-300 hover:bg-purple-800/50 hover:text-white transition-colors"
                            >
                              {feature}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-auto pt-4 flex items-center text-sm text-gray-400">
                          <span className={`w-2 h-2 rounded-full mr-2 ${
                            tool.pricing === 'Free' ? 'bg-green-500' :
                            tool.pricing === 'Freemium' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`} />
                          {tool.pricing}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
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
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/pekkaai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/company/pekkaai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
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
