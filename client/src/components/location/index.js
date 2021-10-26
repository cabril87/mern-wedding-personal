
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/img-2.jpeg'
import strory2 from '../../images/events/img-3.jpeg'
import strory3 from '../../images/events/img-1.jpeg'

import './style.css'

const Location = (props) => {

    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div id="event" className="event-section section-padding">
            <Sectiontitle section={'When & Where'} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-site-button">
                            <div className="event-tabs">
                                <div className="col-md-12 col-12">
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory1} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Wedding Ceremony</h3>
                                                    <span>Saturday, 11 December 2021, 4.30 AM-5.30 PM</span>
                                                    <span>309 N Dawson St, Raleigh, NC 27603</span>
                                                    <p>This is where we will put details about the wedding ceremony. </p>
                                                    <Button className="btn" onClick={toggle}>Location</Button>
                                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                                        <ModalHeader toggle={toggle} >Location</ModalHeader>
                                                        <ModalBody>
                                                            <div className="location-map">
                                                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.6261419428424!2d-78.64573188431348!3d35.784558880170415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f68c4d0067b%3A0xe46061e7b7a5b643!2sMelrose%20Knitting%20Mill!5e0!3m2!1sen!2sus!4v1628533931591!5m2!1sen!2sus"></iframe>
                                                                
                                                            </div>
                                                        </ModalBody>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text event-text-2">
                                                    <h3>Wedding Dinner</h3>
                                                    <span>Saturday, 11 December 2021, 5.30 AM-6.30 PM</span>
                                                    <span>309 N Dawson St, Raleigh, NC 27603</span>
                                                    <p>This is where we put dinner information.</p>
                                                    <Button className="btn" onClick={toggle}>Location</Button>
                                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                                        <ModalHeader toggle={toggle}>Location</ModalHeader>
                                                        <ModalBody>
                                                            <div className="location-map">
                                                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.6261419428424!2d-78.64573188431348!3d35.784558880170415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f68c4d0067b%3A0xe46061e7b7a5b643!2sMelrose%20Knitting%20Mill!5e0!3m2!1sen!2sus!4v1628533931591!5m2!1sen!2sus"></iframe>
                                                            </div>
                                                        </ModalBody>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory3} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Wedding Party</h3>
                                                    <span>Saturday, 11 December 2021, 6.30 AM-10.00 PM</span>
                                                    <span>309 N Dawson St, Raleigh, NC 27603</span>
                                                    <p>This is where we will put info on the wedding party</p>
                                                    <Button className="btn" onClick={toggle}>Location</Button>
                                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                                        <ModalHeader toggle={toggle}>Location</ModalHeader>
                                                        <ModalBody>
                                                            <div className="location-map">
                                                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.6261419428424!2d-78.64573188431348!3d35.784558880170415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f68c4d0067b%3A0xe46061e7b7a5b643!2sMelrose%20Knitting%20Mill!5e0!3m2!1sen!2sus!4v1628533931591!5m2!1sen!2sus"></iframe>
                                                            </div>
                                                        </ModalBody>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;