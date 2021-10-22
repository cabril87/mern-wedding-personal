
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css'

const Welcome = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (

    <div  className={`welcome-area ${props.welcome}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="welcome-content">
                        <h2>Welcome to our big day</h2>
                        <p>This event will be take place at the Melrose Knitting Mill. Please let us know if you will be attending and the number of guest that will be with your party by clicking the RSVP button. If you need help finding out the location of the venue please click the location button.</p>
                        {/* <div className="btn"><AnchorLink href='#rsvp'>Rsvp</AnchorLink></div> */}
                        <Button className="btn" onClick={toggle}>Location</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Location</ModalHeader>
                            <ModalBody>
                                <div className="location-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.6261419428424!2d-78.64573188431348!3d35.784558880170415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f68c4d0067b%3A0xe46061e7b7a5b643!2sMelrose%20Knitting%20Mill!5e0!3m2!1sen!2sus!4v1628533931591!5m2!1sen!2sus"></iframe>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Welcome;