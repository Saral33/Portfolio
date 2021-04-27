import React from 'react';
import '../scss/main.scss';
import connect from '../assests/images/connect.png'
import eyifa from '../assests/images/e-yifa.png'
 
const Projects = () => {
    return (
        <div className="projects section-projects">
             <div className="section-header"> Projects</div>
             <div className="container-box">
                 <div className="projects-box">
                     <div className="image">
                    <img className="project-image" src={connect} alt=""/>
                 </div>
                 <div className="description">
                    <div className="name">
                        Name: <a target='blank' style={{textDecoration:'none'}} href= "https://whispering-cove-44541.herokuapp.com/">ConnectX</a>
                    </div>
                    <div className="name">
                        Language and tools used: React, Node.js, MongoDB, Redux, Gravatar
                    </div>
                    <div className="name">
                        Description: MERN app made for developers where developers can login/signup , make post, comment, share porfolio, share github repos.
                    </div>
                    <div className="name">
                       <a target='blank' style={{textDecoration:'none'}} href= "https://whispering-cove-44541.herokuapp.com/">Click to view</a>
                    </div>
                 </div>
                 </div>
                 <div className="projects-box">
                     <div className="image">
                    <img className="project-image" src={eyifa} alt=""/>
                 </div>
                 <div className="description">
                    <div className="name">
                        Name: <a target='blank' style={{textDecoration:'none'}} href= "https://eyifa.herokuapp.com/">E-Yifa Shop</a>
                    </div>
                    <div className="name">
                        Language and tools Used: React, Node.js, MongoDB, Redux, React-Bootstrap,Multer, PayPal Api
                    </div>
                    <div className="name">
                        Description: E commerce application where user can view,rate,feedback and buy products. This app has admin control system and crud operation
                    </div>
                    <div className="name">
                       <a target='blank' style={{textDecoration:'none'}} href= "https://eyifa.herokuapp.com/">Click to view</a>
                    </div>
                 </div>
                 </div>
                
             </div>
             <p style={{marginTop:'30px',textAlign:'center',fontSize:'12px'}}>Please see my <a target='blank' style={{textDecoration:'none'}} href= "https://github.com/Saral33?tab=repositories">github repos</a>, for more projects</p>
        </div>
    )
}

export default Projects
