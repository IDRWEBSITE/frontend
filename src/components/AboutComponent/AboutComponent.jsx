import React from "react";
import "./module.about.css";
import rectangle from "../../assets/Rectangle 3845.png";
import article from '../../assets/article.jpeg';
const AboutComponent = () => {
  return (
    <div className="wrapper-2">
      <div className="hero-section">
        <h1>About Us</h1>
      </div>
      <div className="grid gap-20 m-10">
        {/* 1st item */}
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center overflow-hidden">
          {/* Image */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={rectangle}
              className="max-w-full mx-auto md:max-w-none h-auto"
              width={540}
              height={405}
              alt=""
              srcset=""
            />
            {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" /> */}
          </div>
          {/* Content */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 overflow-hidden"
            data-aos="fade-right"
          >
            <div className="md:pr-4 lg:pr-12 xl:pr-16 text-center overflow-hidden">
              <div className="font-architects-daughter text-sm text-green-300 mb-2">
                We provide drone-tech services
              </div>
              <h3 className="h3 mb-3 text-xl text-white">
                Services We're Offering
              </h3>
              <p className="text-xl text-gray-400 mb-4">
                We provide drone-tech services We provide drone-tech services We
                provide drone-tech services We provide drone-tech services We
                provide drone-tech services We provide drone-tech services We
                provide drone-tech services We provide drone-tech services
              </p>
            </div>
          </div>
        </div>
        {/* 2nd item */}
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
          {/* Image */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
            data-aos="fade-up"
          >
            {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" /> */}
            <img
              src={rectangle}
              className="max-w-full mx-auto md:max-w-none h-auto"
              width={540}
              height={405}
              alt=""
              srcset=""
            />
          </div>
          {/* Content */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 items-center justify-center"
            data-aos="fade-left"
          >
            <div className="md:pl-4 lg:pl-12 xl:pl-16 overflow-hidden">
              <div className="font-architects-daughter text-sm  text-green-300 mb-2 ">
                More speed. Less spend
              </div>
              <h3 className="h3 mb-3  text-xl text-white">
                Keep projects on schedule
              </h3>
              <p className="text-xl text-gray-400 mb-4">
                We provide drone-tech services We provide drone-tech services We
                provide drone-tech services We provide drone-tech services We
                provide drone-tech services We provide drone-tech services We
                provide drone-tech services We provide drone-tech services
              </p>
              <ul className="text-lg text-gray-400 -mb-2">
                <li className="flex items-center mb-2 ">
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Duis aute irure dolor in reprehenderit</span>
                </li>
                <li className="flex items-center mb-2 ">
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat</span>
                </li>
                <li className="flex items-center ">
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Amet consectetur adipiscing elit</span>
                </li>
              </ul>
              <div className="discover-btn text-white text-sm mt-4">
                <button className=" bg-green-300 rounded h-[35px] w-[130px] p-1 hover:bg-green-500">
                  Discover more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEET OUR TEAM  */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-300 uppercase rounded-full bg-teal-accent-400">
            Our Team
          </p>
          <p className="text-base text-white md:text-xl">Meet Our Team</p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-xl">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-white">Mehul</p>
              <p className="mb-5 text-xs text-green-300">Product Manager</p>
              <div className="flex items-center space-x-3 sm:justify-center"></div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-white">Akriti</p>
              <p className="mb-5 text-xs text-green-300">Design Team Lead</p>
              <div className="flex items-center space-x-3 sm:justify-center"></div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-white">Anjali</p>
              <p className="mb-5 text-xs text-green-300">Human Resources</p>
              <div className="flex items-center space-x-3 sm:justify-center"></div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-white">Mayank</p>
              <p className="mb-5 text-xs text-green-300">Good guy</p>
              <div className="flex items-center space-x-3 sm:justify-center"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Articles  */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-300 uppercase rounded-full bg-teal-accent-400">
            Our Articles
          </p>
          <p className="text-base text-white md:text-xl">Our Latest News</p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-xl">
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-lg"
                src={article}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6  bg-gray-100">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-black overflow-hidden">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block  bg-green-300 hover:bg-green-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Read more
              </button>
            </div>
          </div>
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-lg"
                src={article}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6  bg-gray-100">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-black overflow-hidden">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block  bg-green-300 hover:bg-green-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Read more
              </button>
            </div>
          </div>
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-lg"
                src={article}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6 bg-gray-100 ">
              <h5 class="mb-2 text-xl font-medium leading-tight text-black dark:text-black overflow-hidden">
                Card title
              </h5>
              <p class="mb-4 text-base text-black dark:text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block  bg-green-300 hover:bg-green-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Read more
              </button>
            </div>
          </div>
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-lg"
                src={article}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6  bg-gray-100">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-black overflow-hidden">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block bg-green-300 hover:bg-green-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER  */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-xl sm:text-center ">
        <h2 className="mb-4 text-3xl text-green-300 sm:text-4xl dark:text-green-300 overflow-hidden font-Sansation">SIGN UP FOR OUR NEWSLETTERS</h2>
        <p className="mx-auto mb-8 max-w-2xl font-Sansation text-gray-500 md:mb-12 sm:text-xl dark:text-white">GET NOTIFIED OF THE BEST OF OUR UPDATES</p>
        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-md sm:flex sm:space-y-0 gap-5">
            <div className="relative w-[80%]">
              <label htmlFor="name" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              </div>
              <input
                className="block p-3 pl-10 w-full xxs:w-full text-sm text-gray-900  rounded border border-gray-300 sm:rounded focus:ring-primary-500 focus:border-primary-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 sm:p-2"
                placeholder="Enter your name"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="relative w-[80%]">
              <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              </div>
              <input
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 sm:rounded focus:ring-primary-500 focus:border-primary-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="relative w-[50%]">
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-Sansation font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-black dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
          <input type="checkbox" name="" id=""/> By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form..</div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AboutComponent;
