import React from 'react';
import Image from 'next/image';
import missionIcon from '../public/assets/mission.png';
import visionIcon from '../public/assets/vision.png';
import valuesIcon from '../public/assets/value.png';

const MissionVisionValues = () => {
    const sections = [
        {
            icon: missionIcon,
            title: 'OUR MISSION',
            description: 'To revolutionize real estate and construction management with innovative and efficient technology solutions.'
        },
        {
            icon: visionIcon,
            title: 'OUR VISION',
            description: 'To lead the PropTech industry with cutting-edge, sustainable solutions that shape the future of real estate.'
        },
        {
            icon: valuesIcon,
            title: 'CORE VALUES',
            description: 'Our values include integrity, innovation,Customer Focus and excellence.'
        },
    ];

    return (
        <section className='mission-vision-values py-12'>
             <div className='team__content text-center mb-12'>
                    <h2 className='text-2xl font-bold text-black-600 mt-8 text-blue-600'>
                    Guiding Light
                    </h2>
                </div>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-center gap-8'>
                    {sections.map((section, index) => (
                        <div key={index} className='section-item text-center flex-1 min-w-[250px]'>
                            <div className='icon-container mb-4'>
                                <Image src={section.icon} alt={section.title} width={80} height={80} />
                            </div>
                            <h4 className='section-title text-lg font-bold text-gray-800'>
                                {section.title}
                            </h4>
                            <p className='section-description mt-2 text-black'>
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;