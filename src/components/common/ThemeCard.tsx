import { Eye, ShoppingCart, Star } from 'lucide-react';
import Button from './Button';
import { Theme } from '../../types';
import { useState } from 'react';

type ThemeCardProps = {
  theme: Theme;
};

const ThemeCard = ({ theme }: ThemeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={theme.image} 
          alt={theme.title} 
          className="w-full h-48 object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="p-4 w-full flex justify-between items-center">
            <Button
              variant="light"
              size="small"
            >
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </Button>
            
            <Button
              variant="primary"
              size="small"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Buy Now
            </Button>
          </div>
        </div>
        
        {theme.featured && (
          <div className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded-md">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900">{theme.title}</h3>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-yellow-400" />
            <span className="text-xs font-medium text-gray-700 ml-1">{theme.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{theme.description}</p>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div>
            <span className="text-blue-700 font-bold">${theme.price}</span>
            {theme.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${theme.originalPrice}
              </span>
            )}
          </div>
          
          <div className="text-xs text-gray-500">
            {theme.sales}+ sales
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;