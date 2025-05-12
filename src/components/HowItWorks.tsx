import { Search, CreditCard, PenTool, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Get your website up and running in just a few simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <Step
              number={1}
              icon={<Search className="h-6 w-6" />}
              title="Browse Themes"
              description="Explore our collection of professionally designed website themes and find the perfect match for your project."
            />
            <Step
              number={2}
              icon={<CreditCard className="h-6 w-6" />}
              title="Purchase"
              description="Select your favorite theme and choose the pricing plan that fits your needs and budget."
            />
            <Step
              number={3}
              icon={<PenTool className="h-6 w-6" />}
              title="Customize"
              description="Use our intuitive editor to personalize the theme with your content, colors, and branding elements."
            />
            <Step
              number={4}
              icon={<Rocket className="h-6 w-6" />}
              title="Launch"
              description="Publish your professionally designed website and share it with the world in just a few clicks."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type StepProps = {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Step = ({ number, icon, title, description }: StepProps) => (
  <div className="relative z-10 flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
      {icon}
    </div>
    <div className="absolute -top-3 -left-3 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 max-w-xs">{description}</p>
  </div>
);

export default HowItWorks;