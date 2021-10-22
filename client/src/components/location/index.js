
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
                                                        <ModalHeader toggle={toggle}>Location</ModalHeader>
                                                        <ModalBody>
                                                            <div className="location-map">
                                                                <iframe src="https://www.google.com/maps/dir/35.5207778,-78.7701452/Melrose+Knitting+Mill,+309+N+Dawson+St,+Raleigh,+NC+27603/@35.6525835,-78.8600836,11z/data=!3m1!4b1!4m16!1m6!3m5!1s0x89ac5f68c4d0067b:0xe46061e7b7a5b643!2sMelrose+Knitting+Mill!8m2!3d35.7845564!4d-78.6434515!4m8!1m1!4e1!1m5!1m1!1s0x89ac5f68c4d0067b:0xe46061e7b7a5b643!2m2!1d-78.6434515!2d35.7845564" />
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
                                                                <iframe src="https://www.google.com/maps/dir/35.5207778,-78.7701452/Melrose+Knitting+Mill,+309+N+Dawson+St,+Raleigh,+NC+27603/@35.6525835,-78.8600836,11z/data=!3m1!4b1!4m16!1m6!3m5!1s0x89ac5f68c4d0067b:0xe46061e7b7a5b643!2sMelrose+Knitting+Mill!8m2!3d35.7845564!4d-78.6434515!4m8!1m1!4e1!1m5!1m1!1s0x89ac5f68c4d0067b:0xe46061e7b7a5b643!2m2!1d-78.6434515!2d35.7845564" />
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
                                                                <iframe src="https://www.google.com/maps/dir/35.5207778,-78.7701452/Melrose+Knitting+Mill,+309+N+Dawson+St,+Raleigh,+NC+27603/@35.6525835,-78.8600836,11z/data=!3m1!4b1!4m16!1m6!3m5!1s0x89ac5f68c4d0067b:0xe46061e7b7a5b643!2sMelrose+Knitting+Mill!8m2!3d35.7845564!4d-78.6434515!4m8!1m1!4e1!1m5!1m1!1s0x89ac5f68c4d0067b:0xe46061e7b7a5b643!2m2!1d-78.6434515!2d35.7845564" />
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