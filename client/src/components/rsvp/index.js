import React, { Component } from 'react';
import axios from 'axios'
import Sectiontitle from '../section-title'
import './style.css'

class Rsvp extends Component {

    state = {
        name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (rsvp === '') {
            error.rsvp = "Select your number of rsvp";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.rsvp === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                rsvp: '',
                events: '',
                notes: '',
                error: {}
            })
        }
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success') {
              alert("Message Sent.");
              this.resetForm()
            } else if(response.data.status === 'fail') {
              alert("Message failed to send.")
            }
          })
    }

    resetForm(){
        this.setState({name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {}})
      }

    render() {

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <div className="container rsvp-con">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">

                            
       


                                


                                <form onSubmit={this.subimtHandler.bind(this)} style={{marginTop: '60px'}}>
                                    <Sectiontitle section={'Be Our Guest'} color={'white'}/>
                                    <div className="contact-form form-style">
                                        <div className="col-12 col-sm-12">
                                            <input type="text" value={name} onChange={this.changeHandler.bind(this)} placeholder="Your Full Name*" id="fname" name="name" />
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                        <div className="col-12  col-sm-12">
                                            <input type="text" placeholder="Your Email*" onChange={this.changeHandler.bind(this)} value={email} id="email" name="email" />
                                            <p>{error.email ? error.email : ''}</p>
                                        </div>
                                        <div className="col col-sm-12">
                                            <select className="form-control" onChange={this.changeHandler.bind(this)} value={rsvp} name="rsvp">
                                                <option disabled value="">Number Of rsvp*</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="4">5</option>
                                                <option value="4">6</option>
                                                <option value="4">7</option>
                                                <option value="4">8</option>
                                            </select>
                                            <p>{error.rsvp ? error.rsvp : ''}</p>
                                        </div>
                                        <div className="col col-sm-12">
                                            <select className="form-control" onChange={this.changeHandler.bind(this)} value={events} name="events">
                                                <option disabled value="">I Am Attending*</option>
                                                <option value="All events">All events</option>
                                                <option value="Wedding ceremony">Wedding ceremony</option>
                                                <option value="Reception party">Reception party</option>
                                            </select>
                                            <p>{error.events ? error.events : ''}</p>
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <textarea className="contact-textarea" value={notes} onChange={this.changeHandler.bind(this)} placeholder="Message" name="notes"></textarea>
                                            <p>{error.notes ? error.notes : ''}</p>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button id="submit" type="submit" className="submit">Send Invitation</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rsvp;