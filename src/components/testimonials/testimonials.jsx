import React from "react";
import "./module.testimonials.css";
import rating from "../../assets/rating.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3100, min: 1000 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      <section className="testimonials-section">
        <div className="lg:mt-12 sm:mt-5 bg-black overflow-hidden">
          <h1 className="pb-7 overflow-hidden font-bold text-2xl text-white text-center mt-8 sm:pb-0 sm:text-3xl md:text-4xl lg:text-5xl xl:mt-12">
            Satisfaction is a rating. Loyalty is a Brand
          </h1>
          <p className="pb-14 text-3xl text-white text-center">
            Our Testimonials
          </p>
        </div>
        {/* <div className="wrapper-testimonials"> */}
          <Carousel
            responsive={responsive}
            itemClass="carousel-item-padding-40-px"
          >
            {/* Testimonial slides */}
            <div className="testimonial">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img
                    src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                    className="card-img"
                  />
                </div>
                <div className="card-content">
                  <h2 className="name">Andrew Garfield</h2>
                  <img src={rating} alt="rating" />
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt unde perspiciatis quas incidunt aut natus nostrum
                    quidem nulla, libero mollitia expedita voluptatem, ipsam
                    asperiores, illum error assumenda id fugiat? Animi.
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img
                    src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                    className="card-img"
                  />
                </div>
                <div className="card-content">
                  <h2 className="name">Andrew Garfield</h2>
                  <img src={rating} alt="rating" />
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt unde perspiciatis quas incidunt aut natus nostrum
                    quidem nulla, libero mollitia expedita voluptatem, ipsam
                    asperiores, illum error assumenda id fugiat? Animi.
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img
                    src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                    className="card-img"
                  />
                </div>
                <div className="card-content">
                  <h2 className="name">Andrew Garfield</h2>
                  <img src={rating} alt="rating" />
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt unde perspiciatis quas incidunt aut natus nostrum
                    quidem nulla, libero mollitia expedita voluptatem, ipsam
                    asperiores, illum error assumenda id fugiat? Animi.
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img
                    src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                    className="card-img"
                  />
                </div>
                <div className="card-content">
                  <h2 className="name">Andrew Garfield</h2>
                  <img src={rating} alt="rating" />
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt unde perspiciatis quas incidunt aut natus nostrum
                    quidem nulla, libero mollitia expedita voluptatem, ipsam
                    asperiores, illum error assumenda id fugiat? Animi.
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img
                    src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                    className="card-img"
                  />
                </div>
                <div className="card-content">
                  <h2 className="name">Andrew Garfield</h2>
                  <img src={rating} alt="rating" />
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt unde perspiciatis quas incidunt aut natus nostrum
                    quidem nulla, libero mollitia expedita voluptatem, ipsam
                    asperiores, illum error assumenda id fugiat? Animi.
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img
                    src="https://source.unsplash.com/v2aKnjMbP_k/500x500"
                    className="card-img"
                  />
                </div>
                <div className="card-content">
                  <h2 className="name">Andrew Garfield</h2>
                  <img src={rating} alt="rating" />
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt unde perspiciatis quas incidunt aut natus nostrum
                    quidem nulla, libero mollitia expedita voluptatem, ipsam
                    asperiores, illum error assumenda id fugiat? Animi.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        {/* </div> */}
      </section>
    </>
  );
};

export default Testimonials;
