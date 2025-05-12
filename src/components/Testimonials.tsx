import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Creative Director',
    company: 'Design Studios Inc.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'ThemeForge has completely transformed how we build websites for our clients. The themes are beautifully designed and incredibly flexible, allowing us to create stunning websites in a fraction of the time.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'E-commerce Entrepreneur',
    company: 'TechGadgets',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'After struggling with other website builders, I found ThemeForge and haven\'t looked back. My online store looks professional, loads quickly, and the customization options are exactly what I needed.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    company: 'Growth Solutions',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The themes are not only beautiful but also conversion-focused. We\'ve seen a significant increase in lead generation since switching to ThemeForge for our marketing websites.',
    stars: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Thousands of Customers
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with our themes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="h-64 md:h-full w-full">
                  <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name}
                    className="h-full w-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="font-semibold text-lg">{activeTestimonial.name}</h3>
                    <p className="text-blue-100">{activeTestimonial.role}</p>
                    <p className="text-blue-200 text-sm">{activeTestimonial.company}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < activeTestimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl italic text-gray-700 mb-6">
                    "{activeTestimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    {activeIndex + 1} of {testimonials.length} testimonials
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;