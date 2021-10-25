import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Collapse, CardBody, Card } from 'reactstrap';
import {Link} from 'react-router-dom'
import './style.css';

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(false)


    const menuHandler = () => {
        setShowMenu(!showMenu)
    }

    const openHandler = () => {
       setIsOpen(!isOpen)
    }

        return (
            <div>
                <div className={`mobileMenu ${showMenu ? 'show' : ''}`}>
                    <div className="logo2">
                        <h2><Link to='/'>Carlos & Elyssa</Link></h2>
                    </div>
                    <ul className="responsivemenu" onClick={openHandler} >
                        
                      
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

                <div className="showmenu" onClick={menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    
}

export default MobileMenu
