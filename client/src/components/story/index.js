import React from 'react'
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import strory1 from '../../images/story/FirstDate.jpg'
import strory2 from '../../images/story/First2.jpg'
import strory3 from '../../images/story/proposal.jpg'
import strory4 from '../../images/story/engagement.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <Sectiontitle section={'Our Love Story'}/>
            <div className="container story-con">
                <div className="story-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img img1">
                                <img src={strory1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Our First Dates</h3>
                                {/* <span className="date">Jan 26 2020</span> */}
                                <p>A place to tell all about our first couple dates before being a couple </p>
                                <div className="story-button">
                                    <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Our Journey as a couple</h3>
                                {/* <span className="date">March 8, 2020</span> */}
                                <p>The story of couplehood </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img img2">
                                <img src={strory2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img img3">
                                <img src={strory3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Our Marriage Proposal</h3>
                                {/* <span className="date">Nov 10, 2018</span> */}
                                <p>This is the story of the marraige proposal </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 ">
                            <div className="story-text right-align-text">
                                <h3>Our Engagement</h3>
                                {/* <span className="date">Nov 22, 2020</span> */}
                                <p>Engagement Story paragraph</p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img img4">
                                <img src={strory4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    )
}

export default Story;