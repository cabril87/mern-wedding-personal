import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Sectiontitle from '../section-title'
import './style.css'

import galimg1 from '../../images/gal/img-1.jpg'
import galimg2 from '../../images/gal/img-2.jpg'
import galimg3 from '../../images/gal/img-3.jpg'
// import galimg4 from '../../images/gal/img-4.jpg'
// import galimg5 from '../../images/gal/img-5.jpg'
// import galimg6 from '../../images/gal/img-6.jpg'
// import galimg7 from '../../images/gal/img-7.jpg'
// import galimg8 from '../../images/gal/img-8.jpg'
// import galimg9 from '../../images/gal/img-9.jpg'
// import galimg10 from '../../images/gal/img-10.jpg'
// import galimg11 from '../../images/gal/img-11.jpg'
// import galimg12 from '../../images/gal/img-12.jpg'

class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="Gallery-section section-padding">
          <Sectiontitle section={'Our Gellary'} color={'white'}/>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg1}
                            image={galimg1}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg2}
                            image={galimg2}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg3}
                            image={galimg3}/>
                      </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg4}
                            image={galimg4}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg5}
                            image={galimg5}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg6}
                            image={galimg6}/>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg7}
                            image={galimg1}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg8}
                            image={galimg2}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg9}
                            image={galimg3}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg10}
                            image={galimg4}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg11}
                            image={galimg5}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg12}
                            image={galimg6}/>
                      </div>
                  </div> */}
              </div>
          </div>
      </div>
    );
  }
}

export default Gallery;