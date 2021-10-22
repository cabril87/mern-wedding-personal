import React from  'react';
import gta1 from '../../images/gta/uber.jpeg'
import gta2 from '../../images/gta/accom.jpeg'
import Sectiontitle from '../section-title'
import './style.css'



const Getting = () => {
    return(
        <div className="gta-area section-padding">
            <Sectiontitle section={'Getting There'} color={'white'}/>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                        <div className="row">
                            <div className="heading col-md-12 col-sm-6">
                                <h4>Transportation</h4>
                                <div className="gta-content">
                                    <p>Write info on transportation to wedding</p>
                                </div>
                                <div className="gta-img">
                                    <img src={gta1} alt=""/>
                                </div>
                            </div>
                            <div className="heading heading-2 col-md-12 col-sm-6">
                                <h4>Accommodations</h4>
                                <div className="gta-content">
                                    <p>Write info on wedding accommodations.</p>
                                </div>
                                <div className="gta-img">
                                <img src={gta2} alt=""/>
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