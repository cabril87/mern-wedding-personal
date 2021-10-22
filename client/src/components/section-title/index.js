import React from 'react';
import './style.css'

const Sectiontitle = (props) => {
    return(
        <div className="section-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 style={{color: props.color}}>{props.section}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectiontitle;