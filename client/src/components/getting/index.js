import React, { useEffect } from 'react';
import gta1 from '../../images/gta/uber.jpeg'
import gta2 from '../../images/gta/accom.jpeg'
import Sectiontitle from '../section-title'
import './style.css'
import { Link } from 'react-router-dom';
import apple from '../../images/apple.png'
import google from '../../images/google2.png'
import {
    isAndroid,
    isIOS
} from "react-device-detect";



const Getting = () => {




    // useEffect(() => {
    //     if (isAndroid) {
    //       window.location.href =
    //         "https://play.google.com/store/apps/details?id=com.ubercab&hl=en_US&gl=US";
    //     }else if(isIOS) {
    //       window.location.href =
    //         "https://apps.apple.com/us/app/uber-request-a-ride/id368677368";
    //     } else{
    //       window.location.href =
    //         "https://www.uber.com/global/en/cities/raleigh/";
    //     }
    //   }, []);





    return (
        <div id="getting" className="gta-area section-padding">
            <Sectiontitle section={'Getting There'} color={'white'} />
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                        <div className="row text-center" style={{ color: 'white' }}>
                            <div className="heading col-md-12 col-sm-6">
                                <h4>Transportation</h4>
                                <h3 style={{marginTop: '15px'}}>#Uber</h3>
                                <p>Click the image to request a ride or download the app.</p>

                                <Link to={{ pathname: "https://www.uber.com/global/en/cities/raleigh/" }} target="_blank" >
                                    <div className="gta-img">
                                        <img src={gta1} alt="" />
                                    </div>
                                </Link>
                                <div className="gta-content">
                                    <div className="gta-split">
                                        <Link to={{ pathname: "https://play.google.com/store/apps/details?id=com.ubercab&hl=en_US&gl=US" }} target="_blank">
                                            <img src={google} alt="" />

                                        </Link>

                                        <Link to={{ pathname: "https://apps.apple.com/us/app/uber-request-a-ride/id368677368" }} target="_blank">
                                            <img src={apple} alt="applestore" style={{height:'40px', width: '130px'}}/>

                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="heading heading-2 col-md-12 col-sm-6">
                                <h4>Accommodations</h4>
                                <div className="gta-content">
                                    <p>Write info on wedding accommodations.</p>
                                </div>
                                <div className="gta-img">
                                    <img src={gta2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getting;