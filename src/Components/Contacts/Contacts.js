import React from 'react'
import './Contacts.css';

function Contacts() {
  return (
    <div className='contacts' >
        <h2>Contact Me</h2>
        <h4>Get in touch with me via: </h4>
        <div className='icons'>
        <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: thinaqutsu8@gmail.com</span>
                                </p>
        </div>

        <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    <span>: Cape Town, South Africa</span>
                                </p>
        </div>
        </div>

              <div className='form'>
               
              </div>
    </div>
  );
};

export default Contacts;