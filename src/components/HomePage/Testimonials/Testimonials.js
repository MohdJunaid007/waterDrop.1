import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Testimonials.css";
import testimonialsData from "./TestimonialsData";
import { Pagination } from "swiper";
import "./../../../App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

// importing images
import Img1 from '../userImg/img1.png'
import Img2 from '../userImg/i2.jpeg'
import Img5 from '../userImg/i3.jpeg'
import Img6 from '../userImg/i1.jpeg'

function Testimonials() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <div className="testimonial-main-span ">
      <div className="testimonial-main">
        <div className="testimonial-heading ">
          {/* <div className="testimonial-heading-title my-4">
            <p className="uppercase">TESTIMONIALS</p>
          </div> */}
          <div className="testimonial-heading-sub-title text-5xl text-center font-semibold md:my-5 m-auto">
          <span style={{"color":"#006bff"}}> Testimonials</span>  from Early Adopters
          </div>

          <div className="testimonial-heading-content text-center  lg:mx-12 mb-12 font-semibold ">
            <p>
             " Human nature is like a water. It takes the shape of its container "<br/> <i>~ Wallace Stevens</i> 
            </p>
          </div>
        </div>
        <div className="testimonial-box-container container m-5 p-5">
          <Swiper
            spaceBetween={30}
            scrollbar={{ draggable: true }}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              620: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{ delay: 1500 }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* {testimonialsData.map((obj, index) => { */}
              {/* return ( */}
                <SwiperSlide
                  className="testimonial-box container  shadow-2xl "
                  key={uuidv4()}
                >
                  <div className="testimonial-box-heading px-5  pt-4">
                    <img
                       src={process.env.PUBLIC_URL + `/Images/box-decore-1.svg`}
                      
                    />
                  </div>
                  <div className="testimonial-box-content my-4 text-center px-5">
                    <p>
                      {/* {obj.content} */}
                      Waterdrop is the best app I have found till date. It has made the process of getting water cans super efficient. Saves times. And effort. Thank you for creating this wonderful app helping suppliers and customers alike.

                      </p>
                  </div>
                  <div className="testimonial-box-profile m-auto">
                    <img
                    src={Img2}
                      //src={process.env.PUBLIC_URL + `/Images/${obj.profile}`}
                      style={{"width":"70px" ,"height":"70px"}}
                      className="m-auto my-4"
                    />
                    <div className="testimonial-box-profile-social-media text-white pb-3">
                      <p className="text-center my-2 font-semibold">
                        {/* {obj.userName} */}
                        Medha Raj Jyotishi
                      </p>
                      
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="testimonial-box container  shadow-2xl "
                  key={uuidv4()}
                >
                  <div className="testimonial-box-heading px-5  pt-4">
                    <img
                       src={process.env.PUBLIC_URL + `/Images/box-decore-1.svg`}
                      
                    />
                  </div>
                  <div className="testimonial-box-content my-4 text-center px-5">
                    <p>
                      {/* {obj.content} */}
                      Easy to use and convenient to buy. Thank you for creating this app. It has made the entire process of ordering water can hassle free.

                      </p>
                  </div>
                  <div className="testimonial-box-profile m-auto">
                    <img
                    src={Img1}
                      //src={process.env.PUBLIC_URL + `/Images/${obj.profile}`}
                      style={{"width":"70px" ,"height":"70px"}}
                      className="m-auto my-4"
                    />
                    <div className="testimonial-box-profile-social-media text-white pb-3">
                      <p className="text-center my-2 font-semibold">
                        {/* {obj.userName} */}
                        Rajesh Khapardey
                      </p>
                      
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="testimonial-box container  shadow-2xl "
                  key={uuidv4()}
                >
                  <div className="testimonial-box-heading px-5  pt-4">
                    <img
                       src={process.env.PUBLIC_URL + `/Images/box-decore-1.svg`}
                      
                    />
                  </div>
                  <div className="testimonial-box-content my-4 text-center px-5">
                    <p>
                      {/* {obj.content} */}
                      Very useful app for working professional, no need to worry about water anymore.

                      </p>
                  </div>
                  <div className="testimonial-box-profile m-auto">
                    <img
                    src={Img5}
                      //src={process.env.PUBLIC_URL + `/Images/${obj.profile}`}
                      style={{"width":"70px" ,"height":"70px"}}
                      className="m-auto my-4"
                    />
                    <div className="testimonial-box-profile-social-media text-white pb-3">
                      <p className="text-center my-2 font-semibold">
                        {/* {obj.userName} */}
                        Bhairab Mondal
                      </p>
                      
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="testimonial-box container  shadow-2xl "
                  key={uuidv4()}
                >
                  <div className="testimonial-box-heading px-5  pt-4">
                    <img
                       src={process.env.PUBLIC_URL + `/Images/box-decore-1.svg`}
                      
                    />
                  </div>
                  <div className="testimonial-box-content my-4 text-center px-5">
                    <p>
                      {/* {obj.content} */}
                      If you need water delivered to your doorstep within an hour, this app can facilitate this very easily.
                      </p>
                  </div>
                  <div className="testimonial-box-profile m-auto">
                    <img
                    src={Img6}
                      //src={process.env.PUBLIC_URL + `/Images/${obj.profile}`}
                      style={{"width":"70px" ,"height":"70px"}}
                      className="m-auto my-4"
                    />
                    <div className="testimonial-box-profile-social-media text-white pb-3">
                      <p className="text-center my-2 font-semibold">
                        {/* {obj.userName} */}
                        Rahul Kore
                      </p>
                      
                    </div>
                  </div>
                </SwiperSlide>

              {/* ); */}
            {/* })} */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
