import { AITool } from '../types/ai-tool';
import { categories } from '../data/ai-tools';

export function searchTools(tools: AITool[], query: string): AITool[] {
  const searchQuery = query.toLowerCase();
  
  return tools.filter(tool => {
    const category = categories.find(c => c.id === tool.category);
    const categoryName = category ? category.name.toLowerCase() : '';
    
    return (
      tool.name.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery) ||
      tool.features.some(feature => feature.toLowerCase().includes(searchQuery)) ||
      categoryName.includes(searchQuery)
    );
  });
} 