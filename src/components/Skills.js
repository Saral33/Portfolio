import React from 'react';
import '../scss/main.scss';
import Languages from '../utils/Languages';
import { ReactComponent as HtmlLogo } from '../assests/svg logos/html.svg';
import { ReactComponent as CssLogo } from '../assests/svg logos/css.svg';
import { ReactComponent as JsLogo } from '../assests/svg logos/js.svg';
import { ReactComponent as NodeJsLogo } from '../assests/svg logos/node.svg';
import { ReactComponent as ReactJsLogo } from '../assests/svg logos/react.svg';
import { ReactComponent as NextJsLogo } from '../assests/svg logos/next.svg';
import { ReactComponent as SassLogo } from '../assests/svg logos/sass.svg';
import { ReactComponent as ReduxLogo } from '../assests/svg logos/redux.svg';
import { ReactComponent as BootStrapLogo } from '../assests/svg logos/bootstrap.svg';
import { ReactComponent as ExpressLogo } from '../assests/svg logos/express.svg';
import { ReactComponent as MongoDBLogo } from '../assests/svg logos/mongodb.svg';
import { ReactComponent as SocketLogo } from '../assests/svg logos/socket.svg';

const Skills = () => {
  return (
    <div className="section-skills skills">
      <div style={{ color: '#fff' }} className="section-header">
        Skills
      </div>
      <div
        data-aos="zoom-in"
        style={{ marginTop: '40px' }}
        className="skills__languages__container"
      >
        <div className="skills__heading">Languages / Frameworks</div>
        <div className="languages__container">
          <Languages title="HTML5">
            <HtmlLogo className="languages__logo" />
          </Languages>
          <Languages title="CSS3">
            <CssLogo className="languages__logo" />
          </Languages>
          <Languages title="JavaScript">
            <JsLogo className="languages__logo" />
          </Languages>
          <Languages title="Node.JS">
            <NodeJsLogo className="languages__logo" />
          </Languages>
          <Languages title="React.JS">
            <ReactJsLogo className="languages__logo" />
          </Languages>
          <Languages title="Next.JS">
            <NextJsLogo className="languages__logo" />
          </Languages>
        </div>
        <div className="skills__heading"> Libraries / DataBase</div>
        <div className="languages__container">
          <Languages title="Sass">
            <SassLogo className="languages__logo" />
          </Languages>
          <Languages title="BootStrap">
            <BootStrapLogo className="languages__logo" />
          </Languages>
          <Languages title="Redux">
            <ReduxLogo className="languages__logo" />
          </Languages>
          <Languages title="Express">
            <ExpressLogo className="languages__logo" />
          </Languages>
          <Languages title="MongoDB">
            <MongoDBLogo className="languages__logo" />
          </Languages>
          <Languages title="Socket.Io">
            <SocketLogo className="languages__logo" />
          </Languages>
        </div>
      </div>
    </div>
  );
};

export default Skills;
