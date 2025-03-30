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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-[#080808]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isSidebarOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-400" />
              )}
            </button>
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
              className="text-gray-400 hover:text-purple-400 transition-colors"
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
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse bg-[#2a2b2e] rounded-lg h-[300px]"
                  />
                ))
              ) : (
                filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools?search=${encodeURIComponent(tool.name)}`}
                    className="group"
                  >
                    <div className="hover-card rounded-lg overflow-hidden h-[300px] relative group">
                      <div className="absolute inset-0">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="card-image-wrapper h-[140px]">
                        <Image
                          src={tool.imageUrl}
                          alt={tool.name}
                          width={400}
                          height={140}
                          className="card-image"
                        />
                        <div className="image-overlay absolute inset-0" />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold text-white mb-1">{tool.name}</h3>
                        <p className="text-sm text-gray-400 mb-2 line-clamp-2">{tool.description}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {tool.features.slice(0, 2).map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-purple-900/30 rounded-full text-xs text-purple-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto pt-2 flex items-center text-xs text-gray-400">
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
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
                {categories.slice(0, 3).map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(category.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
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
