import { Link, RichText, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

import { BannerCarousel, BannerProps } from 'src/Types/types';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/modules';
import Image from 'next/image';

const Banner = ({ fields }: BannerProps) => {
  //   console.log(fields);
  const bgImage =
    'https://calm-mallard-fairly.ngrok-free.app' + fields.BannerBackgroundImage.value.src;
  return (
    <div
      className="relative text-center h-full w-screen overflow-hidden"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Image
        className=" bg-cover bg-no-repeat min-w-fit min-h-screen"
        src={bgImage}
        alt={fields.BannerBackgroundImage.value.alt as string}
        height={1000}
        width={2000}
      ></Image>
      <div className="absolute bg-fixed bg-black/[0.5] overflow-hidden bottom-0 left-0 right-0 top-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center md:justify-start px-4  ">
          <div className="container mx-auto">
            <Swiper
              spaceBetween={500}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                // disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              //   className="mySwiper"
            >
              {fields.BannerCarousels.map((carousel: BannerCarousel, index: number) => {
                // console.log(carousel);

                return (
                  <SwiperSlide key={index} className="w-screen">
                    <div className="text-white md:text-left flex flex-col gap-7 md:max-w-screen-sm">
                      <div className=" text-4xl md:text-5xl font-bold uppercase">
                        <RichText field={carousel.fields.BannerCarouselTitle}></RichText>
                      </div>
                      <div className="">
                        <Text field={carousel.fields.BannerCarouselDescription}></Text>
                      </div>
                      <div className="flex justify-center flex-col sm:flex-row text-center md:justify-start items-center gap-3">
                        <Link
                          className="bg-white text-black w-44 py-3 border-2 border-white hover:bg-transparent hover:text-white transition duration-500"
                          field={carousel.fields.BannerCarouselReadMoreCTA}
                        >
                          <Text field={carousel.fields.BannerCarouselReadMoreCTAText}></Text>
                        </Link>
                        <Link
                          className="bg-yellow-400 text-white w-44 py-3 hover:bg-transparent transition duration-500 border-2 hover:text-yellow-400 border-yellow-400"
                          field={carousel.fields.BannerCarouselQuoteCTA}
                        >
                          <Text field={carousel.fields.BannerCarouselQuoteCTAText}></Text>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<BannerProps>(Banner);
