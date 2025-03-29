import React from 'react';
import { AITool, Category } from '../types/ai-tool';
import {
  TrendingIcon,
  ChatbotsIcon,
  ArtDesignIcon,
  TextWritingIcon,
  EducationIcon,
  CodeDevelopmentIcon,
  AudioMusicIcon,
  VideoAnimationIcon,
  ProductivityIcon
} from '../components/icons';

export const categories: Category[] = [
  {
    id: 'trending',
    name: 'Trending Now',
    description: 'Most popular and trending AI tools',
    icon: <TrendingIcon />
  },
  {
    id: 'chatbots',
    name: 'Chatbots',
    description: 'AI-powered conversational tools',
    icon: <ChatbotsIcon />
  },
  {
    id: 'art-design',
    name: 'Art & Design',
    description: 'AI tools for creative work',
    icon: <ArtDesignIcon />
  },
  {
    id: 'text-writing',
    name: 'Text & Writing',
    description: 'AI writing and text generation tools',
    icon: <TextWritingIcon />
  },
  {
    id: 'education',
    name: 'Education',
    description: 'AI tools for learning and education',
    icon: <EducationIcon />
  },
  {
    id: 'code-development',
    name: 'Code & Development',
    description: 'AI tools for developers',
    icon: <CodeDevelopmentIcon />
  },
  {
    id: 'audio-music',
    name: 'Audio & Music',
    description: 'AI tools for audio and music',
    icon: <AudioMusicIcon />
  },
  {
    id: 'video-animation',
    name: 'Video & Animation',
    description: 'AI tools for video and animation',
    icon: <VideoAnimationIcon />
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'AI tools to boost productivity',
    icon: <ProductivityIcon />
  }
];

export const aiTools: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced language model for natural conversations and text generation',
    category: 'trending',
    imageUrl: '/images/chatgpt.jpg',
    url: 'https://chat.openai.com',
    features: ['Natural Language', 'Code Generation', 'Creative Writing'],
    pricing: 'Freemium'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI art generator creating stunning visuals from text descriptions',
    category: 'trending',
    imageUrl: '/images/midjourney.jpg',
    url: 'https://www.midjourney.com',
    features: ['Art Generation', 'High Resolution', 'Style Control'],
    pricing: 'Paid'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps write better code faster',
    category: 'trending',
    imageUrl: '/images/github-copilot.jpg',
    url: 'https://github.com/features/copilot',
    features: ['Code Completion', 'Multiple Languages', 'IDE Integration'],
    pricing: 'Paid'
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Advanced AI assistant with strong analytical capabilities',
    category: 'trending',
    imageUrl: '/images/claude.jpg',
    url: 'https://claude.ai',
    features: ['Analysis', 'Research', 'Writing'],
    pricing: 'Freemium'
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    description: 'OpenAI\'s AI system that creates realistic images from text descriptions',
    category: 'art-design',
    imageUrl: '/images/dalle.jpg',
    url: 'https://openai.com/dall-e-3',
    features: ['Image Generation', 'Art Creation', 'Style Transfer'],
    pricing: 'Paid'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open-source image generation model for creating art and visuals',
    category: 'art-design',
    imageUrl: '/images/stable-diffusion.jpg',
    url: 'https://stability.ai',
    features: ['Image Generation', 'Custom Models', 'Local Installation'],
    pricing: 'Free'
  },
  {
    id: 'codewhisperer',
    name: 'Amazon CodeWhisperer',
    description: 'AI coding companion that suggests code in real-time',
    category: 'code-development',
    imageUrl: '/images/codewhisperer.jpg',
    url: 'https://aws.amazon.com/codewhisperer',
    features: ['Code Suggestions', 'Security Focus', 'Multiple Languages'],
    pricing: 'Free'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice generation platform for creating natural-sounding speech',
    category: 'audio-music',
    imageUrl: '/images/elevenlabs.jpg',
    url: 'https://elevenlabs.io',
    features: ['Voice Generation', 'Voice Cloning', 'Text-to-Speech'],
    pricing: 'Freemium'
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'AI-powered creative suite for video and content creation',
    category: 'video-animation',
    imageUrl: '/images/runway.jpg',
    url: 'https://runwayml.com',
    features: ['Video Generation', 'Video Editing', 'Motion Graphics'],
    pricing: 'Paid'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI-powered writing and organization assistant integrated into Notion',
    category: 'productivity',
    imageUrl: '/images/notion.jpg',
    url: 'https://notion.so',
    features: ['Writing Assistant', 'Task Management', 'Knowledge Base'],
    pricing: 'Subscription'
  },
  {
    id: 'duolingo',
    name: 'Duolingo Max',
    description: 'AI-powered language learning platform with personalized lessons',
    category: 'education',
    imageUrl: '/images/duolingo.jpg',
    url: 'https://www.duolingo.com',
    features: ['Personalized Learning', 'Gamification', 'Multiple Languages'],
    pricing: 'Freemium'
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI writing assistant that helps improve grammar and style',
    category: 'text-writing',
    imageUrl: '/images/grammarly.jpg',
    url: 'https://www.grammarly.com',
    features: ['Grammar Check', 'Style Suggestions', 'Plagiarism Detection'],
    pricing: 'Freemium'
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI content creation platform for marketing and business writing',
    category: 'text-writing',
    imageUrl: '/images/jasper.jpg',
    url: 'https://www.jasper.ai',
    features: ['Content Generation', 'SEO Optimization', 'Brand Voice'],
    pricing: 'Subscription'
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation platform for creating digital avatars',
    category: 'video-animation',
    imageUrl: '/images/synthesia.jpg',
    url: 'https://www.synthesia.io',
    features: ['Digital Avatars', 'Multiple Languages', 'Custom Voices'],
    pricing: 'Subscription'
  },
  {
    id: 'replika',
    name: 'Replika',
    description: 'AI companion app for emotional support and conversation',
    category: 'chatbots',
    imageUrl: '/images/replika.jpg',
    url: 'https://replika.ai',
    features: ['Emotional Support', 'Personality Development', 'Memory'],
    pricing: 'Freemium'
  },
  {
    id: 'copilot-x',
    name: 'GitHub Copilot X',
    description: 'Enhanced AI coding assistant with advanced features and improved code understanding',
    category: 'code-development',
    imageUrl: 'https://picsum.photos/seed/github-copilot-x/800/600',
    url: 'https://github.com/features/copilot-x',
    features: ['Code Completion', 'Documentation Generation', 'Test Generation'],
    pricing: 'Paid'
  },
  {
    id: 'anthropic-claude',
    name: 'Claude 3',
    description: 'Advanced AI assistant with improved reasoning and analysis capabilities',
    category: 'trending',
    imageUrl: 'https://picsum.photos/seed/claude-3/800/600',
    url: 'https://claude.ai',
    features: ['Advanced Analysis', 'Research', 'Writing', 'Code Generation'],
    pricing: 'Freemium'
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    description: 'AI art generation platform specializing in game assets and creative content',
    category: 'art-design',
    imageUrl: 'https://picsum.photos/seed/leonardo-ai/800/600',
    url: 'https://leonardo.ai',
    features: ['Game Assets', 'Style Training', 'Batch Generation'],
    pricing: 'Freemium'
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI-powered copywriting platform for marketing and business content',
    category: 'text-writing',
    imageUrl: 'https://picsum.photos/seed/copy-ai/800/600',
    url: 'https://www.copy.ai',
    features: ['Marketing Copy', 'Social Media', 'Product Descriptions'],
    pricing: 'Freemium'
  },
  {
    id: 'coursera-ai',
    name: 'Coursera AI',
    description: 'AI-powered learning platform with personalized course recommendations',
    category: 'education',
    imageUrl: 'https://picsum.photos/seed/coursera-ai/800/600',
    url: 'https://www.coursera.org',
    features: ['Course Recommendations', 'Learning Paths', 'Progress Tracking'],
    pricing: 'Freemium'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion tool supporting multiple programming languages',
    category: 'code-development',
    imageUrl: 'https://picsum.photos/seed/tabnine/800/600',
    url: 'https://www.tabnine.com',
    features: ['Multi-language Support', 'Team Learning', 'Code Security'],
    pricing: 'Freemium'
  },
  {
    id: 'lalal-ai',
    name: 'LALAL.AI',
    description: 'AI-powered audio separation tool for music and voice isolation',
    category: 'audio-music',
    imageUrl: 'https://picsum.photos/seed/lalal-ai/800/600',
    url: 'https://www.lalal.ai',
    features: ['Voice Isolation', 'Music Separation', 'Batch Processing'],
    pricing: 'Paid'
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'AI-powered video and audio editing platform with text-based editing',
    category: 'video-animation',
    imageUrl: 'https://picsum.photos/seed/descript/800/600',
    url: 'https://www.descript.com',
    features: ['Text-based Editing', 'Voice Cloning', 'Screen Recording'],
    pricing: 'Freemium'
  },
  {
    id: 'taskade',
    name: 'Taskade AI',
    description: 'AI-powered project management and collaboration platform',
    category: 'productivity',
    imageUrl: 'https://picsum.photos/seed/taskade/800/600',
    url: 'https://www.taskade.com',
    features: ['Project Planning', 'Task Management', 'Team Collaboration'],
    pricing: 'Freemium'
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    description: 'AI platform for creating and interacting with AI characters',
    category: 'chatbots',
    imageUrl: 'https://picsum.photos/seed/character-ai/800/600',
    url: 'https://character.ai',
    features: ['Character Creation', 'Roleplay', 'Multiple Characters'],
    pricing: 'Freemium'
  },
  {
    id: 'fireflies-ai',
    name: 'Fireflies.ai',
    description: 'AI meeting assistant that transcribes and summarizes conversations',
    category: 'productivity',
    imageUrl: 'https://picsum.photos/seed/fireflies-ai/800/600',
    url: 'https://fireflies.ai',
    features: ['Meeting Transcription', 'Action Items', 'Search & Analytics'],
    pricing: 'Freemium'
  },
  {
    id: 'mem-ai',
    name: 'Mem.ai',
    description: 'AI-powered note-taking and knowledge management platform',
    category: 'productivity',
    imageUrl: 'https://picsum.photos/seed/mem-ai/800/600',
    url: 'https://mem.ai',
    features: ['Smart Notes', 'Knowledge Graph', 'AI Writing'],
    pricing: 'Freemium'
  },
  {
    id: 'chatbase',
    name: 'Chatbase',
    description: 'AI chatbot builder for customer support and engagement',
    category: 'chatbots',
    imageUrl: 'https://picsum.photos/seed/chatbase/800/600',
    url: 'https://www.chatbase.co',
    features: ['Custom Training', 'Multi-language', 'Analytics'],
    pricing: 'Freemium'
  },
  {
    id: 'khan-academy-ai',
    name: 'Khan Academy AI',
    description: 'AI-powered learning platform with personalized tutoring',
    category: 'education',
    imageUrl: 'https://picsum.photos/seed/khan-academy-ai/800/600',
    url: 'https://www.khanacademy.org',
    features: ['Personalized Learning', 'Practice Exercises', 'Progress Tracking'],
    pricing: 'Free'
  }
]; 