import React from 'react';
import profile from '../assests/images/profile.jpg';
import '../scss/main.scss';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import CV from '../assests/CV.docx';


const About = () => {
    return (
        <div className="section-about" id="about">
            <div className="section-header"> About</div>
            <div className="section-about__container">
                <div className="about-image">
                    <img className="profile-pic" src={profile} alt="profile" />
                </div>
                <div className="about-text">
                    <h3 className="about-text-primary">Myself</h3>
                    <p className="about-text-secondary">
                        My name is Saral Karki. I am currently studying Bachelor's degree at computer science and information technology at Patan Multiple Campus. My dream is to be a software developer. Learning is my passion. I love to learn new things.
                </p>
                 <Button
            style={{fontSize:'14px', marginTop:'25px'}}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<GetAppIcon />}
        >
       <a style={{textDecoration:'none',color:'wheat'}} href={CV} download> Download CV</a>
      </Button> 
                </div>
            </div>
        </div>
    )
}

export default About
