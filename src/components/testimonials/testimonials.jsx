import React from "react";
import "./module.testimonials.css";
import rating from "../../assets/rating.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-section">
        <div className="lg:mt-12 sm:mt-5 bg-black overflow-hidden">
          <h1 className=" pb-7 overflow-hidden font-bold text-2xl text-white text-center mt-8 sm:pb-0 sm:text-3xl md:text-4xl lg:text-5xl xl:mt-12">
            Satisfaction is a rating. Loyalty is a Brand
          </h1>
          <p className="pb-14 text-3xl text-white text-center">
            Our Testimonials
          </p>
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
                slidesPerGroup: 2,
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  unde perspiciatis quas incidunt aut natus nostrum quidem
                  nulla, libero mollitia expedita voluptatem, ipsam asperiores,
                  illum error assumenda id fugiat? Animi.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  unde perspiciatis quas incidunt aut natus nostrum quidem
                  nulla, libero mollitia expedita voluptatem, ipsam asperiores,
                  illum error assumenda id fugiat? Animi.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  unde perspiciatis quas incidunt aut natus nostrum quidem
                  nulla, libero mollitia expedita voluptatem, ipsam asperiores,
                  illum error assumenda id fugiat? Animi.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  unde perspiciatis quas incidunt aut natus nostrum quidem
                  nulla, libero mollitia expedita voluptatem, ipsam asperiores,
                  illum error assumenda id fugiat? Animi.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  unde perspiciatis quas incidunt aut natus nostrum quidem
                  nulla, libero mollitia expedita voluptatem, ipsam asperiores,
                  illum error assumenda id fugiat? Animi.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  unde perspiciatis quas incidunt aut natus nostrum quidem
                  nulla, libero mollitia expedita voluptatem, ipsam asperiores,
                  illum error assumenda id fugiat? Animi.
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
