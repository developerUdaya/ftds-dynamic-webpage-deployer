import { useState } from 'react';
import { Star, Code, PenTool, ShoppingCart } from 'lucide-react';
import { themes } from '../data/themes';
import Button from './common/Button';
import ThemeCard from './common/ThemeCard';

const FeaturedThemes = () => {
  const [category, setCategory] = useState('all');
  
  const filteredThemes = category === 'all' 
    ? themes 
    : themes.filter(theme => theme.category === category);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="themes">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Browse Our Premium Themes
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover professionally designed themes for every type of website
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg">
            <CategoryButton 
              active={category === 'all'} 
              onClick={() => setCategory('all')}
            >
              All
            </CategoryButton>
            <CategoryButton 
              active={category === 'business'} 
              onClick={() => setCategory('business')}
              icon={<ShoppingCart className="w-4 h-4 mr-1" />}
            >
              Business
            </CategoryButton>
            <CategoryButton 
              active={category === 'portfolio'} 
              onClick={() => setCategory('portfolio')}
              icon={<PenTool className="w-4 h-4 mr-1" />}
            >
              Portfolio
            </CategoryButton>
            <CategoryButton 
              active={category === 'blog'} 
              onClick={() => setCategory('blog')}
              icon={<Code className="w-4 h-4 mr-1" />}
            >
              Blog
            </CategoryButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="large">
            View All Themes
          </Button>
        </div>
      </div>
    </section>
  );
};

type CategoryButtonProps = {
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const CategoryButton = ({ active, onClick, icon, children }: CategoryButtonProps) => (
  <button
    className={`py-2 px-4 rounded-lg text-sm font-medium flex items-center transition-all ${
      active 
        ? 'bg-white text-blue-700 shadow-sm' 
        : 'bg-transparent text-gray-600 hover:text-gray-900'
    }`}
    onClick={onClick}
  >
    {icon}
    {children}
  </button>
);

export default FeaturedThemes;