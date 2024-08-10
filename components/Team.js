import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import team01 from "../public/assets/Danr.png";
import team02 from "../public/assets/jackson.png";
import team03 from "../public/assets/md.jpg";

const teamMembers = [
    {
        imgUrl: team03,
        name: 'Daniel Karangwa M',
        position: 'Managing Director',
        bio: 'Daniel has over 15 years of experience in the industry and has led numerous successful projects.',
        linkedin: 'https://www.linkedin.com/in/daniel-karangwa-m-6641281b7',
        twitter: 'https://twitter.com/danielkarangwa'
    },
    {
        imgUrl: team01,
        name: 'Dan Rwiyamirira',
        position: 'Business Analyst',
        bio: 'Dan specializes in business analysis and strategic planning with a focus on innovative solutions.',
        linkedin: 'https://www.linkedin.com/in/dan-rwiyamirira-becon-mba-47103475',
        twitter: 'https://twitter.com/danrwiyamirira'
    },
    {
        imgUrl: team02,
        name: 'Jackson Ngabonziza',
        position: 'CTO',
        bio: 'Jackson is a tech visionary with a deep understanding of software development and infrastructure.',
        linkedin: 'https://www.linkedin.com/in/jackson-ngabonziza-292338181/',
        twitter: 'https://twitter.com/jacksonngabonziza'
    },
];

const Team = () => {
    const [hoveredMember, setHoveredMember] = useState(null);

    return (
        <section className='our__team pt-12'>
            <div className='container mx-auto px-4'>
                <div className='team__content text-center mb-12'>
                    <h6 className='subtitle text-gray-500 uppercase'>Our Team</h6>
                    <h2 className='text-2xl font-bold'>
                        Meet the Minds Behind <span className='highlight text-blue-600'>NexGen</span>
                    </h2>
                </div>
                <div className='team__wrapper flex flex-wrap justify-center gap-8'>
                    {teamMembers.map((item, index) => (
                        <div
                            className='team__item flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-full md:w-1/3 lg:w-1/4 relative'
                            key={index}
                            onMouseEnter={() => setHoveredMember(index)}
                            onMouseLeave={() => setHoveredMember(null)}
                        >
                            <div className='team__img w-40 h-40 rounded-full overflow-hidden relative mb-4'>
                                <Image src={item.imgUrl} alt={item.name} layout='fill' objectFit='cover' />
                            </div>
                            <div className='team__details text-center'>
                                <h4 className='team__name text-lg font-semibold text-gray-800'>
                                    {item.name}
                                </h4>
                                <p className='description mt-2 text-gray-500'>{item.position}</p>
                                <div className='team__member-social flex justify-center gap-4 mt-4'>
                                    <a href={item.linkedin} target='_blank' rel='noopener noreferrer' style={{ color: '#0e76a8' }}>
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href={item.twitter} target='_blank' rel='noopener noreferrer' style={{ color: '#1DA1F2' }}>
                                        <FaTwitter size={20} />
                                    </a>
                                </div>
                            </div>
                            {hoveredMember === index && (
                                <div className='bio absolute top-full left-0 right-0 bg-white text-black p-4 mt-2 rounded-lg shadow-lg'>
                                    <p className='text-gray-700 text-sm'>{item.bio}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
