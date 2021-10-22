import React from  'react';
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import bride1 from '../../images/groomsmen-bridesmaid/1.jpg'
import bride2 from '../../images/groomsmen-bridesmaid/2.jpg'
import bride3 from '../../images/groomsmen-bridesmaid/3.jpg'
import bride4 from '../../images/groomsmen-bridesmaid/4.jpg'
import bride5 from '../../images/groomsmen-bridesmaid/5.jpg'
import bride6 from '../../images/groomsmen-bridesmaid/6.jpg'
import bride7 from '../../images/groomsmen-bridesmaid/7.jpg'
import bride8 from '../../images/groomsmen-bridesmaid/8.jpg'

import './style.css'

const People = (props) => {
    return(
        <section id='people' className={props.guest}>
            <div className="groomsmen-bridesmaid-area section-padding">
                <Sectiontitle section={'Groomsmen & Bridesmaid'} color={'white'}/>
                <div className="container">
                    <div className="groomsmen-bridesmaid-area-menu">
                        <div className="Groomsman-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 grid">
                                    <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                                        <div className="groomsmen-bridesmaid-img">
                                            {/* <img src={bride1 } alt="bride"/> */}
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li><Link to='/'><span className="fa fa-facebook"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-twitter"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-linkedin"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-pinterest"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Maria</h4>
                                            <span>Maid Of Honer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 grid">
                                    <div className=" groomsmen-bridesmaid-wrap-2">
                                        <div className="groomsmen-bridesmaid-img">
                                        {/* <img src={bride5 } alt="bride"/> */}
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li><Link to='/'><span className="fa fa-facebook"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-twitter"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-linkedin"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-pinterest"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Ashton</h4>
                                            <span>Bridesmaid</span>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 col-sm-6 grid">
                                    <div className="groomsmen-bridesmaid-wrap">
                                        <div className="groomsmen-bridesmaid-img">
                                        {/* <img src={bride3 } alt="bride"/> */}
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li><Link to='/'><span className="fa fa-facebook"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-twitter"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-linkedin"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-pinterest"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Angelica</h4>
                                            <span>Bridesman</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 grid">
                                    <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                                        <div className="groomsmen-bridesmaid-img">
                                            {/* <img src={bride1 } alt="bride"/> */}
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li><Link to='/'><span className="fa fa-facebook"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-twitter"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-linkedin"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-pinterest"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Alec</h4>
                                            <span>Best Man</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 grid">
                                    <div className=" groomsmen-bridesmaid-wrap-2">
                                        <div className="groomsmen-bridesmaid-img">
                                        {/* <img src={bride5 } alt="bride"/> */}
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li><Link to='/'><span className="fa fa-facebook"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-twitter"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-linkedin"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-pinterest"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Sal</h4>
                                            <span>Groomsmen</span>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 col-sm-6 grid">
                                    <div className="groomsmen-bridesmaid-wrap">
                                        <div className="groomsmen-bridesmaid-img">
                                        {/* <img src={bride3 } alt="bride"/> */}
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li><Link to='/'><span className="fa fa-facebook"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-twitter"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-linkedin"></span></Link></li>
                                                    <li><Link to='/'><span className="fa fa-pinterest"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                        <h4>Chris</h4>
                                            <span>Groomsmen</span>
                                        </div>
                                    </div>
                                </div>
                             
                             
                            
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default People;