import { ArrowRight } from 'lucide-react';
import Button from './common/Button';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroImgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (heroImgRef.current) {
      heroImgRef.current.style.opacity = '0';
      setTimeout(() => {
        if (heroImgRef.current) {
          heroImgRef.current.style.opacity = '1';
        }
      }, 300);
    }
  }, [activeTab]);

  const themes = [
    {
      name: "Business Pro",
      description: "Clean, professional design for corporate sites",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Creative Portfolio",
      description: "Showcase your work with stunning visuals",
      image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "E-Commerce Plus",
      description: "Convert visitors into customers with our shop theme",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const activeTheme = themes[activeTab];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build beautiful websites with our <span className="text-blue-700">premium themes</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Find the perfect theme, customize it to match your brand, and launch your website in minutes. No coding required.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="large">
                Browse Themes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="large">
                Watch Demo
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-gray-500 mb-2 font-medium">Trusted by 10,000+ businesses</p>
              <div className="flex flex-wrap gap-6 opacity-70">
                <div className="h-8 w-auto text-gray-400">Company A</div>
                <div className="h-8 w-auto text-gray-400">Company B</div>
                <div className="h-8 w-auto text-gray-400">Company C</div>
                <div className="h-8 w-auto text-gray-400">Company D</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg opacity-20 blur-lg"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="flex border-b">
                  <div className="flex space-x-1.5 p-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div
                  ref={heroImgRef}
                  className="transition-opacity duration-300 ease-in-out"
                  style={{ opacity: 1 }}
                >
                  <img
                    src={activeTheme.image}
                    alt={activeTheme.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4 border-t">
                  <h3 className="font-medium text-gray-900">{activeTheme.name}</h3>
                  <p className="text-sm text-gray-600">{activeTheme.description}</p>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {themes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeTab === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`View theme ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;