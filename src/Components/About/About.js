import React from 'react'
import Pic from './Photos/Pic.png';
// import './About.css';
import './about.css'

function About() {
  return (
    <section className='about-page'>
      <h2>About</h2>
      <div className='pic-container'>
        <img src={Pic} alt='My picture'/>
      </div>

        
      <div className='content'> 
           <h4>Junior Software developer</h4>
         <p>
                I'm a Junior Software developer, but more than that, <br/>
                I'm an explorer, a dreamer, and a lifelong learner. <br/>
                My journey through life has been filled with diverse experiences <br/>
                that have shaped my perspectives and fueled my curiosity.<br/>
                I am a passionate young woman with strong interpersonal skills<br/>
                 and good communication skills. Through my education and hands on experience, <br/>
                 I have gained a strong foundation in software development, web design,
                 <br/> UX and UI design.
                </p>
      </div>

      <div className='circle'>
       </div>

       <div className='circ'>
      
        </div>
      
    </section>
  )
}

export default About