'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Modern website',
      description: 'Website adaptable to all devices, with ui components and animated interactions.',
      image: '/portfolio1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Brand design',
      description: 'Website adaptable to all devices, with ui components and animated interactions.',
      image: '/portfolio2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Online store',
      description: 'Website adaptable to all devices, with ui components and animated interactions.',
      image: '/portfolio3.jpg',
      link: '#'
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900" id="portfolio">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-2">
          Portfolio
        </h2>
        <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          Most recent work
        </span>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
            }}
            className="pb-12"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all hover:shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-6">
                    {item.description}
                  </p>
                  
                  <a 
                    href={item.link}
                    className="inline-flex items-center text-blue-500 transition-colors hover:text-blue-600 font-medium"
                  >
                    Demo
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
