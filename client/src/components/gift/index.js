import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gift1 from '../../images/gift/img-1.png'
import gift2 from '../../images/gift/img-2.png'
import gift3 from '../../images/gift/img-3.png'
import gift4 from '../../images/gift/img-4.png'
import './style.css'
import Sectiontitle from "../section-title";
import { Link } from "react-router-dom";


class Gift extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="gift" className="gift-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ marginTop: '70px' }}>
              <Sectiontitle section={'Registry'} color={'#161616'} />
              <Slider {...settings}>
                <Link to={{ pathname: 'https://www.crateandbarrel.com/gift-registry/elyssa-lischin-and-carlos-abril/r6321469' }} target="_blank">
                  <div className="item">
                    <img src={gift1} alt="" />
                  </div>
                </Link>
                <Link>
                  <div className="item">
                    <img src={gift2} alt="" />
                  </div>
                </Link>
                <Link>
                  <div className="item">
                    <img src={gift3} alt="" />
                  </div>
                </Link>
                <Link to={{ pathname: 'https://www.belk.com/registry-results/?ID=44dbaa47f8581aa0279d06eea5&scope=giftregistrysearch'}} target="_blank">
                  <div className="item">
                    <img src={gift4} alt="" />
                  </div>
                </Link>
                {/* <div className="item">
                                <img src={gift1} alt=""/>
                                </div>
                                <div className="item">
                                <img src={gift2} alt=""/>
                                </div>
                                <div className="item">
                                <img src={gift3} alt=""/>
                                </div>
                                <div className="item">
                                <img src={gift4} alt=""/>
                              </div> */}
              </Slider>
                              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontStyle: 'italic', fontSize: '10px' }}>
                                <p>*Click store image to check out wedding registry</p>
                
                              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gift;