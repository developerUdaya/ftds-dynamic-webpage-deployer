import { Check, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Button from './common/Button';

const pricingOptions = [
  {
    id: 'basic',
    name: 'Basic',
    price: { monthly: 49, yearly: 39 },
    description: 'Perfect for individuals and small projects',
    features: [
      'Access to 10+ basic themes',
      'Visual editor',
      'Basic customization options',
      '3 months of support',
      'Use on 1 website',
    ],
    notIncluded: [
      'Premium themes',
      'Priority support',
      'White-label option',
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    popular: true,
    price: { monthly: 99, yearly: 79 },
    description: 'Ideal for businesses and professional websites',
    features: [
      'Access to all 30+ themes',
      'Advanced visual editor',
      'Premium customization options',
      '12 months of support',
      'Use on up to 3 websites',
      'Premium themes included',
      'Priority support',
    ],
    notIncluded: [
      'White-label option',
    ]
  },
  {
    id: 'agency',
    name: 'Agency',
    price: { monthly: 199, yearly: 159 },
    description: 'For agencies and teams building multiple websites',
    features: [
      'Access to all 30+ themes',
      'Advanced visual editor',
      'Premium customization options',
      'Lifetime support',
      'Unlimited websites',
      'Premium themes included',
      'Priority support',
      'White-label option',
    ],
    notIncluded: []
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to our theme editor.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-1 rounded-full inline-flex items-center border shadow-sm">
              <button
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
              </button>
            </div>
          </div>
          
          {billingCycle === 'yearly' && (
            <p className="mt-4 inline-block bg-green-100 text-green-800 text-sm py-1 px-3 rounded-full font-medium">
              Save 20% with annual billing
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className={`relative bg-white rounded-xl border ${
                option.popular ? 'border-blue-300 shadow-lg' : 'border-gray-200 shadow-sm'
              } overflow-hidden transition-all hover:shadow-lg`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{option.name}</h3>
                <p className="mt-2 text-gray-600">{option.description}</p>
                <div className="mt-6 mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    ${option.price[billingCycle]}
                  </span>
                  <span className="text-gray-600 ml-2">/ month</span>
                  
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-gray-500 mt-1">Billed annually (${option.price.yearly * 12})</p>
                  )}
                </div>
                
                <Button
                  variant={option.popular ? 'primary' : 'outline'}
                  fullWidth
                >
                  Get Started
                </Button>
              </div>
              
              <div className="border-t border-gray-200 p-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {option.notIncluded.length > 0 && (
                  <>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 mt-8">Not included:</h4>
                    <ul className="space-y-3">
                      {option.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5">—</span>
                          <span className="text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need a custom solution?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact our sales team for enterprise pricing and customized solutions.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;