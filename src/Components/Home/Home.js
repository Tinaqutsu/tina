import React from 'react'
import Profile from './images/profile.png';
import background from './images/Background.png';
import './Home.css';

function Home() {
  return (
    <div className='home-page'>
        <div className='hero'>
          <div className='left-content'>
            
         <img id='background-picture' src={background} alt='background picture' />
          <div className="text-overlay">
              <h1> Hi,</h1>
              <h3>
                I'm Thina <span className='name'>Qutsu</span> 
              </h3>
              <p>
                a Front-end Developer <br />
                I specialize in creating responsive websites and <br />
                applications using various languages.
              </p>
            </div> 
          <div className='bottom-items'>
          <div className="button">
                  <button>Download cv</button>
                </div> 
                <div className='icons'>
                <i className="fa-brands fa-github"></i>
                <i className="fa-solid fa-envelope"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
          </div>
        </div>
          <div className='right-content'>
          
          <img id='picture' src={Profile} alt='Profile picture'/>
        </div>
      </div>
    </div>
  
  )
}

export default Home