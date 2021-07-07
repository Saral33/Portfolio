import React from 'react';
import '../scss/main.scss';

const Skills = () => {
  return (
    <div data-aos="zoom-in" className="section-skills skills">
      <div className="section-header">Skills</div>
      <div className="section-skills__container">
        <div className="container__languages">
          <div className="container__heading">
            {' '}
            <h3> Languages / Frameworks</h3>
          </div>

          <ul className="container__languages-skills">
            <li className="languages">
              <i className="icon devicon-html5-plain colored"></i>
              <span>HTML5</span>
            </li>
            <li className="languages">
              <i className="icon devicon-css3-plain colored"></i>
              <span>CSS3</span>
            </li>
            <li className="languages">
              <i className="icon devicon-javascript-plain colored"></i>
              <span>Javascript</span>
            </li>
            <li className="languages">
              <i className="icon devicon-react-original colored"></i>
              <span>React.JS</span>
            </li>
            <li className="languages">
              <i className="icon devicon-redux-original colored"></i>
              <span>Redux</span>
            </li>
            <li className="languages">
              <i class="icon devicon-nextjs-line colored"></i>
              <span>Next.JS</span>
            </li>
            <li className="languages">
              <i className="icon devicon-react-plain colored"></i>
              <span>React Native</span>
            </li>
            <li className="languages">
              <i className="icon devicon-nodejs-plain colored"></i>
              <span>Node.JS</span>
            </li>
            <li className="languages">
              <i className="icon devicon-typescript-plain colored"></i>
              <span>Typescript</span>
            </li>
            <li className="languages">
              <i className="icon devicon-mongodb-plain-wordmark colored"></i>
              <span>Mongo DB</span>
            </li>
          </ul>
        </div>
        <div className="container__languages container__library">
          <div className="container__heading">
            {' '}
            <h3>Design libraries, IDE , &amp; Tools</h3>
          </div>

          <ul className="container__languages-skills">
            <li className="languages">
              <i className="icon devicon-bootstrap-plain colored"></i>
              <span>Bootstrap</span>
            </li>
            <li className="languages">
              <i className="icon devicon-sass-original colored"></i>
              <span>SASS</span>
            </li>
            <li className="languages">
              <i className="icon devicon-materialui-plain colored"></i>
              <span>Material UI</span>
            </li>
            <li className="languages">
              <i className="icon devicon-vscode-plain colored"></i>
              <span>Visual Studio Code</span>
            </li>
            <li className="languages">
              <i className="icon devicon-git-plain colored"></i>
              <span>Git</span>
            </li>
            <li className="languages">
              <i className="icon devicon-github-original colored"></i>
              <span>Github</span>
            </li>
            <li className="languages">
              <i className="icon devicon-npm-original-wordmark colored"></i>
              <span>NPM Packages</span>
            </li>
            <li className="languages">
              <i className="icon devicon-heroku-plain colored"></i>
              <span>Heroku</span>
            </li>
            <li className="languages">
              <i className="icon devicon-codepen-plain colored"></i>
              <span>Code Pen</span>
            </li>
            <li className="languages">
              <i className="icon devicon-firebase-plain colored"></i>
              <span>Firebase</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
