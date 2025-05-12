import { Palette, Sliders, Zap, Code, Shield, Clock } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-blue-50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to Create Amazing Websites
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our themes come packed with powerful features to help you build professional websites quickly and easily
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Palette />}
            title="Stunning Design"
            description="Professional, modern designs that make your website stand out from the crowd."
          />
          <FeatureCard
            icon={<Sliders />}
            title="Easy Customization"
            description="Change colors, fonts, and layouts with our intuitive visual editor."
          />
          <FeatureCard
            icon={<Zap />}
            title="Lightning Fast"
            description="Optimized for speed to provide the best user experience and SEO benefits."
          />
          <FeatureCard
            icon={<Code />}
            title="Clean Code"
            description="Built with the latest technologies and best practices for maintainability."
          />
          <FeatureCard
            icon={<Shield />}
            title="Regular Updates"
            description="Stay current with security patches and new features at no extra cost."
          />
          <FeatureCard
            icon={<Clock />}
            title="Time-Saving"
            description="Launch your website in hours instead of weeks with our ready-to-use themes."
          />
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
    <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Features;