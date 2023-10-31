import React,{useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const Home = () => {
  return (
    <div>
      <Container>
        <div className="Title">
          <h1>BENGAL INSTITUE OF TECHNOLOGY</h1>
          <div className="navCol social-media-icons d-flex justify-content-lg-end">
            <a className="icons" href="http://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="icons" href="http://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="icons" href="http://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="icons" href="http://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="icons" href="http://youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Top-logo.png/220px-Top-logo.png"
          ></img>
        </div>
        <div className="navbar">
          <Link to="/campus">Campus</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/Facilities">Facilities</Link>
          <Link to="/placement">Placement</Link>
        </div>
        <div>
          <h1 className="head">Highlight/Falana/dhimkana</h1>
        </div>

        <button
          className="login-butt d-flex justify-content-evenly"
          onClick="https://www.google.com/"
        >
          Student Login
        </button>
        <div className="image-slider-container">
          <div className="border-top"></div>
          <Swiper
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/BITN.jpeg" alt="BIT" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT2.jpg" alt="BIT2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT3.jpg" alt="BIT3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT4.jpeg" alt="BIT4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT5.webp" alt="BIT5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT6.webp" alt="BIT6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT7.png" alt="BIT7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT8.jpeg" alt="BIT8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT11.jpg" alt="BIT11" />
            </SwiperSlide>
          </Swiper>

          {/* <Carousel showArrows={true} showStatus={false} showIndicators={true} showThumbs={false}>
        <div className="slide">
          <img src="https://media.istockphoto.com/id/1372528688/vector/colorful-horizontal-retro-background-in-style-hippie.jpg?s=612x612&w=0&k=20&c=hIogg58mVhNQL4o-uIUY4e1q_B8vuOsIrpKuFCD9CCw=" alt="Image 1" />
        </div>
        <div className="slide">
          <img src="https://wallpapers.com/images/hd/funky-colorful-skull-art-f0r8i5x9qk7btq5n.jpg" alt="Image 2" />
        </div>
        <div className="slide">
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </Carousel> */}
          <div className="border-bottom"></div>
        </div>

        <div className="image-slider-container">
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        >
            <SwiperSlide>
              <img src="/images/BIT9.jpg" alt="BIT9" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT10.webp" alt="BIT10" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT12.webp" alt="BIT12" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/BIT13.webp" alt="BIT13" />
            </SwiperSlide>
        </Swiper>
          {/* <div className="border-top"></div>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
          >
            <div className="slide">
              <img
                src="https://media.istockphoto.com/id/1372528688/vector/colorful-horizontal-retro-background-in-style-hippie.jpg?s=612x612&w=0&k=20&c=hIogg58mVhNQL4o-uIUY4e1q_B8vuOsIrpKuFCD9CCw="
                alt="Image 1"
              />
            </div>
            <div className="slide">
              <img
                src="https://wallpapers.com/images/hd/funky-colorful-skull-art-f0r8i5x9qk7btq5n.jpg"
                alt="Image 2"
              />
            </div>
            <div className="slide">
              <img src="image3.jpg" alt="Image 3" />
            </div>
          </Carousel> */}
          <div className="border-bottom"></div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
