import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CountDown from "../../components/countdown/index"
import {Animated} from "react-animated-css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


const SimpleSlider = () => {

    const [offSetY, setOffSetY] = useState(0);

    const handleScroll = () => setOffSetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
   
      const settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        // slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed:2500,
        // fade:true
      };
      return (
        <Slider {...settings}>
          <div id="home" className="item1">
              <div className="container">
                  <div className="slide-content">
                      <div className="slide-subtitle" >
                          <h6>WERE GETTING MARRIED</h6>
                      </div>
                      <div className="slide-title">
                          <h2>Save Our Date</h2>
                      </div>
                      <div className="slide-text">
                          <p>11 December 2021</p>
                      </div>
                      {/* <Animated>
                          <div className="animated-circle"></div>
                      </Animated> */}
                      <CountDown />
                  </div>
              </div>
          
          </div>
          <div className="item2">
            <div className="container">
                <div className="container">
                      <div className="slide-content">
                          <div className="slide-subtitle">
                              <h4>WERE GETTING MARRIED</h4>
                          </div>
                          <div className="slide-title">
                              <h2>Save Our Date</h2>
                          </div>
                          <div className="slide-text">
                              <p>11 December 2021</p>
                          </div>
                          {/* <Animated>
                            <div className="animated-circle"></div>
                          </Animated> */}
                      </div>
                    </div>
                
                </div>
          </div>
          
        </Slider>
      );
    
  }

export default SimpleSlider;