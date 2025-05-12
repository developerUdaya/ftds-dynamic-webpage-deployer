import Button from './common/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Beautiful Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers and start building your dream website today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="light"
              size="large"
            >
              Browse Themes
            </Button>
            <Button
              variant="outline-light"
              size="large"
            >
              Learn More
            </Button>
          </div>
          
          <p className="mt-8 text-blue-200 text-sm">
            30-day money-back guarantee • Free updates • Premium support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;