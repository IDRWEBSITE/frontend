import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export const Testimonials = () => {
  let testimonials = [
    {
      testimonial:
        "I'm a huge fan of this app, I've found it to be incredibly intuitive overall. Would definitely recommend this if you're looking for an app to make planning that bit easier.",
      author: "John Doe",
      authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
      authorMetadata: "Founder",
    },
    {
      testimonial:
        "This app has been pivotal for helping our team collaborate on tasks and new plans, I’d definitely recommend this if you’d like an intuitive planner app.",
      author: "Emma Doe",
      authorMetadata: "Founder",
      authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
    },
    {
      testimonial:
        "I'm a huge fan of this app, I've found it to be incredibly intuitive overall. Would definitely recommend this if you're looking for an app to make planning that bit easier.",
      author: "John Doe",
      authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
      authorMetadata: "Founder",
    },
    {
      testimonial:
        "This app has been pivotal for helping our team collaborate on tasks and new plans, I’d definitely recommend this if you’d like an intuitive planner app.",
      author: "Emma Doe",
      authorMetadata: "Founder",
      authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
    },
    {
      testimonial:
        "I absolutely love the features provided, and that I can create notes to each task also. It really helped streamline my workflow, I would definitely recommend it!",
      author: "James Doe",
      authorImg: "https://source.unsplash.com/pUhxoSapPFA/500x500",
      authorMetadata: "Founder",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 24 });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <section className="lg:mt-12 bg-black">
        <div className="py-24 w-4/5 mx-auto">
          <h1 className="pb-7 font-bold text-5xl text-white text-center">
            Satisfaction is a rating. Loyalty is a Brand
          </h1>
          <p className="pb-14 text-3xl text-white text-center">Our Testimonials</p>
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
                    <br/>
                    <div className="flex flex-col ml-4">
                      <h2 className="font-semibold text-base">
                        {testimonial.author}
                      </h2>
                      <p className="text-green-300">
                        {testimonial.authorMetadata}
                      </p>
                    </div>
                    <br/>
                    <div className="flex flex-row">
                    <svg
                    className="h-5 w-5"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="h-5 w-5"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="h-5 w-5"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="h-5 w-5"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="h-5 w-5"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
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
    </div>
  );
};

export default Testimonials;
