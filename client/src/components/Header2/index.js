import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'react-sticky-header/styles.css';
import "./style.css"
import MobileMenu from '../../components/MobileMenu'

const Header2 = () => {

    return(
          <div className="Header_root">
            <div  className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <h2><Link to='/'>Carlos & Elyssa</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className=" mobail-menu d-flex">
                                <li><AnchorLink href='#couple'>COUPLE</AnchorLink></li>
                                    <li><AnchorLink href='#story'>STORY</AnchorLink></li>
                                    <li><AnchorLink href='#people'>PEOPLE</AnchorLink></li>
                                    <li><AnchorLink href='#event'>EVENTS</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>GALLERY</AnchorLink></li>
                                    <li><AnchorLink href='#rsvp'>RSVP</AnchorLink></li>
                                    <li><AnchorLink href='#getting'>INFO</AnchorLink></li>
                                    <li><AnchorLink href='#gift'>REGISTRY</AnchorLink></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
          </div>
    )
}

export default Header2;
