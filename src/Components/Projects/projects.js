import React from 'react';
import './projects.css';
import bank from './projectsimages/BankApp (1).PNG';
import conveter from './projectsimages/conveter.png';
import tutor from './projectsimages/tutor.jpg';
import gadget from './projectsimages/gadget.png';
import calculator from './projectsimages/calculator.jpg';



function projects() {
  return (
    <div className="container" id="portfolio">
            <div className="main-title">
                <h2>My <span>Projects</span></h2>
            </div>

            <p className="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>

            <div className="portfolios">

                <div className="portfolio-item">
                    <div className="image">
                    <img src={bank} alt='CSS'/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Code-5X/bank-app-final" className="icon">
                                <i className="fab fa-github"></i>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                </a>
                                <p>This banking app helps keep track of your transactions</p> 
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="image">
                    <img src={conveter} alt='CSS'/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Creative-Innovators/Inverter-Website" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <p>Metric conveter helps us convert given data to your choice, considering the metrics on our app</p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="image">
                    <img src={gadget} alt='CSS'/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Tinaqutsu/Gadget-borrow.git" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://gadgetsborrow.netlify.app/" className="icon">
                                <i className="fab fa-link"></i>
                                </a>
                                <p>With gadget borrow, we rent out inveters especially because of the increased loadshedding </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="image">
                    <img src={tutor} alt='CSS'/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Creative-Innovators/Creative-Tutors-Responsive-Web.git" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://creative-tutors.netlify.app/" className="icon">
                                <i className="fab fa-link"></i>
                            </a>
                            <p>Creative tutors offer tutoring lessons to various students that are looking to unlock their potential</p>
                           
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="image">
                    <img src={calculator} alt='CSS'/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Code-5X/taxCalculator" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <p>Tax calculater helps calculate your salary after tax deductions</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
                    
        
  )
}

export default projects;