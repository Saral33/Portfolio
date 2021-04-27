import React from 'react';
import '../scss/main.scss';

const Skills = () => {
    return (
        <div className='section-skills skills'>
            <div className='section-header'>Skills</div>
            <div className='section-skills__container'>
                <div className='container__languages'>
                    <h3 className='container__heading'>Programming Languages</h3>
                    <ul className='container__languages-skills'>
                        <li className='languages'>
                        <i className="icon" class="devicon-html5-plain colored"></i>
                            <span>HTML5</span>
                        </li>
                        <li className='languages'>
                        <i className="icon" class="devicon-css3-plain colored"></i>
                            <span>CSS3</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-javascript-plain colored"></i>
                            <span>Javascript</span></li>
                        <li className='languages'> 
                        <i className="icon" class="devicon-react-original colored"></i>
                        <span>React JS</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-redux-original colored"></i>
                            <span>Redux</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-nodejs-plain colored"></i>
                            <span>Node JS</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-express-original-wordmark"></i>
                            <span>Express JS</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-mongodb-plain-wordmark colored"></i>
                            <span>Mongo DB</span></li>
                    </ul>
                </div>
                <div className='container__library'>
                    <h3 className='container__heading'>Design libraries, IDE , &amp; Tools</h3>
                    <ul className='container__languages-skills'>
                        <li className='languages'>
                        <i className="icon" class="devicon-bootstrap-plain colored"></i>
                            <span>Bootstrap</span>
                        </li>
                        <li className='languages'>
                        <i className="icon" class="devicon-sass-original colored"></i>
                            <span>SASS</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-materialui-plain colored"></i>
                            <span>Material UI</span></li>
                        <li className='languages'> 
                        <i className="icon" class="devicon-visualstudio-plain colored"></i>
                        <span>Visual Studio Code</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-git-plain colored"></i>
                            <span>Git</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-github-original colored"></i>
                            <span>Github</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-npm-original-wordmark colored"></i>
                            <span>NPM Packages</span></li>
                        <li className='languages'>
                        <i className="icon" class="devicon-codepen-plain colored"></i>
                            <span>Code Pen</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
