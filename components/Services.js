import React from 'react';
import { CodeIcon, ServerIcon, SupportIcon } from '@heroicons/react/outline';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
    <div className="mb-4">
      <Icon className="h-12 w-12 text-gray-700" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
    <button className="mt-4 text-blue-500 hover:underline">MORE</button>
  </div>
);

const ServicesSection = () => (
  <div className="container mx-auto p-6">
    <div className='team__content text-center mb-12'>
                    <h2 className='text-2xl font-bold text-black-600'>
                        OUR SERVICES
                    </h2>
                </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ServiceCard 
        icon={CodeIcon} 
        title="Mobile Development" 
        description="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident." 
      />
      <ServiceCard 
        icon={ServerIcon} 
        title="Mobility Services" 
        description="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident." 
      />
      <ServiceCard 
        icon={SupportIcon} 
        title="Software Consulting" 
        description="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident." 
      />
    </div>
  </div>
);

export default ServicesSection;
