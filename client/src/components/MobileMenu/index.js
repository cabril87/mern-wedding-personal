import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Collapse, CardBody, Card } from 'reactstrap';
import {Link} from 'react-router-dom'
import './style.css';

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    // state = {
    //     isMenuShow: false,
    //     isOpen: false,
    // }

    // menuHandler = () => {
    //     this.setState({
    //         isMenuShow: !this.state.isMenuShow
    //     })
    // }

    // setIsOpen = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }

    const menuHandler = () => {
        setShowMenu(!showMenu)
    }

    const openHandler = () => {
       setIsOpen(!isOpen)
    }


   

     

        return (
            <div>
                <div className={`mobileMenu ${showMenu ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
                    <div className="logo2">
                        <h2><Link to='/'>Carlos & Elyssa</Link></h2>
                    </div>
                    <ul className="responsivemenu" onClick={openHandler} >
                        
                      
                        <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                        <li><AnchorLink href='#story'>Story</AnchorLink></li>
                        <li><AnchorLink href='#people'>People</AnchorLink></li>
                        <li><AnchorLink href='#event'>Events</AnchorLink></li>
                        <li><AnchorLink href='#gallery'>Gallery</AnchorLink></li>
                        <li><AnchorLink  href='#rsvp'>Rsvp</AnchorLink></li>
                      
                    </ul>
                    
                </div>

                <div className="showmenu" onClick={menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    
}

export default MobileMenu
