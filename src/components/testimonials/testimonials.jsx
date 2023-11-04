
import React from "react";
import './module.testimonials.css';
import rating from '../../assets/rating.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
<<<<<<< HEAD
    <>
    
    <section className="testimonials-section">
    <div className="lg:mt-12 sm:mt-5 bg-black overflow-hidden">
                   <h1 className=" pb-7 font-bold text-2xl text-white text-center mt-8 sm:pb-0 sm:text-3xl md:text-4xl lg:text-5xl xl:mt-12">
           Satisfaction is a rating. Loyalty is a Brand
         </h1>
         <p className="pb-14 text-3xl text-white text-center">Our Testimonials</p>
=======
    <div>
      <section className="lg:mt-12">
        <div className="py-24 w-4/5 mx-auto">
          <h1 className="pb-7 font-bold text-5xl text-white text-center">
            Satisfaction is a rating. Loyalty is a Brand
          </h1>
          <p className="pb-14 text-3xl text-white text-center">
            Our Testimonials
          </p>
          <div className="embla overflow-hidden flex flex-wrap" ref={emblaRef}>
            <div className="embla__container flex flex-row">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_33%] md:flex-[0_0_32%] mr-4 min-w-0 bg-black shadow-sm border-solid border-2  border-white-200  rounded-lg"
                >
                  <div className="flex flex-col pt-4 mt-2 items-center justify-center">
                    <img
                      className="rounded-full inline h-15 w-[8rem]"
                      src={testimonial.authorImg}
                      alt={testimonial.author}
                    />
                    <br />
                    <div className="flex flex-col ml-4">
                      <h2 className="font-semibold text-base">
                        {testimonial.author}
                      </h2>
                      <p className="text-green-300">
                        {testimonial.authorMetadata}
                      </p>
                    </div>
                    <br />
                    <div className="flex flex-row">
                      <svg
                        className="h-5 w-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex flex-col bg-black px-6 py-6 rounded-2xl">
                    <p className="pt-2 text-white leading-relaxed">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div>
              <button
                type="button"
                className="mr-4 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                onClick={scrollPrev}
              >
                <ChevronLeft />
                <span className="sr-only">Left arrow</span>
              </button>

              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                onClick={scrollNext}
              >
                <ChevronRight />
                <span className="sr-only">Right arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>
>>>>>>> 7ef0fdb (new home page)
    </div>
    <div className="wrapper-testimonials">

      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={55}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          520: {
            slidesPerView: 2,
            slidesPerGroup:2,
          },
          950: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                alt="img-1"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Andrew Garfield</h2>
            <img src={rating} alt="rating" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde perspiciatis quas incidunt aut natus nostrum quidem nulla, libero mollitia expedita voluptatem, ipsam asperiores, illum error assumenda id fugiat? Animi.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                alt="img-1"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Andrew Garfield</h2>
            <img src={rating} alt="rating" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde perspiciatis quas incidunt aut natus nostrum quidem nulla, libero mollitia expedita voluptatem, ipsam asperiores, illum error assumenda id fugiat? Animi.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                alt="img-1"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Andrew Garfield</h2>
            <img src={rating} alt="rating" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde perspiciatis quas incidunt aut natus nostrum quidem nulla, libero mollitia expedita voluptatem, ipsam asperiores, illum error assumenda id fugiat? Animi.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                alt="img-1"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Andrew Garfield</h2>
            <img src={rating} alt="rating" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde perspiciatis quas incidunt aut natus nostrum quidem nulla, libero mollitia expedita voluptatem, ipsam asperiores, illum error assumenda id fugiat? Animi.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                alt="img-1"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Andrew Garfield</h2>
            <img src={rating} alt="rating" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde perspiciatis quas incidunt aut natus nostrum quidem nulla, libero mollitia expedita voluptatem, ipsam asperiores, illum error assumenda id fugiat? Animi.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img
                src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                alt="img-1"
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Andrew Garfield</h2>
            <img src={rating} alt="rating" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde perspiciatis quas incidunt aut natus nostrum quidem nulla, libero mollitia expedita voluptatem, ipsam asperiores, illum error assumenda id fugiat? Animi.
            </p>
          </div>
        </SwiperSlide>
       
      </Swiper>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
