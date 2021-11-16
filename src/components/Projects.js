import React from 'react';
import '../scss/main.scss';
import connect from '../assests/images/connect.png';
import eyifa from '../assests/images/e-yifa.png';
import mobyletech from '../assests/images/mobyle.png';
import hottaste from '../assests/images/hot-taste.png';
import chat from '../assests/images/chat.png';

const Projects = () => {
  return (
    <div className="projects section-projects">
      <div className="section-header"> Projects</div>
      <div data-aos="zoom-in" className="container-box">
        <div className="projects-box">
          <div className="image">
            <img className="project-image" src={chat} alt="" />
          </div>
          <div className="description">
            <div className="name">
              Name:{' '}
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://hello1chat.herokuapp.com/"
              >
                Hello Chat
              </a>
            </div>
            <div className="name">
              Language and tools used: Node.js, Socket.io, express
            </div>
            <div className="name">
              Description: Chat app where user can join chat room and chat with
              more than two people. Supports real-time chat.
            </div>
            <div className="name">
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://hello1chat.herokuapp.com/"
              >
                Click to view
              </a>
            </div>
          </div>
        </div>
        <div className="projects-box">
          <div className="image">
            <img className="project-image" src={connect} alt="" />
          </div>
          <div className="description">
            <div className="name">
              Name:{' '}
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://whispering-cove-44541.herokuapp.com/"
              >
                ConnectX
              </a>
            </div>
            <div className="name">
              Language and tools used: React, Node.js, MongoDB, Redux, Gravatar
            </div>
            <div className="name">
              Description: MERN app made for developers where developers can
              login/signup , make post, comment, share porfolio, share github
              repos.
            </div>
            <div className="name">
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://whispering-cove-44541.herokuapp.com/"
              >
                Click to view
              </a>
            </div>
          </div>
        </div>
        <div className="projects-box">
          <div className="image">
            <img className="project-image" src={eyifa} alt="" />
          </div>
          <div className="description">
            <div className="name">
              Name:{' '}
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://eyifa.herokuapp.com/"
              >
                E-Yifa Shop
              </a>
            </div>
            <div className="name">
              Language and tools Used: React, Node.js, MongoDB, Redux,
              React-Bootstrap,Multer, PayPal Api
            </div>
            <div className="name">
              Description: E commerce application where user can
              view,rate,feedback and buy products. This app has admin control
              system and crud operation
            </div>
            <div className="name">
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://eyifa.herokuapp.com/"
              >
                Click to view
              </a>
            </div>
          </div>
        </div>
        <div className="projects-box">
          <div className="image">
            <img className="project-image" src={mobyletech} alt="" />
          </div>
          <div className="description">
            <div className="name">
              Name:{' '}
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://mobyletech.herokuapp.com/"
              >
                Mobyle-Tech
              </a>
            </div>
            <div className="name">
              Language and tools Used: React, Node.js, MongoDB, Redux,
              React-Bootstrap,Multer, Stripe Payment, Cloudinary, Chart.js,
              Google Login Api, Send Grid
            </div>
            <div className="name">
              Description: Online shop to buy smart phones. This is very huge
              project which includes many features like email activation, search
              functionality, search suggestion, cart management, review/rate
              products, cloudinary image upload, google login, stripe payment,
              charts and statsistics for admin, admin dashboard, create new
              products, approve orders,zoom image.
            </div>
            <div className="name">
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://mobyletech.herokuapp.com/"
              >
                Click to view
              </a>
            </div>
            <div className="name">
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://www.youtube.com/watch?v=6n-CnAzQE6I"
              >
                Video Demo
              </a>
            </div>
          </div>
        </div>
        <div className="projects-box">
          <div className="image">
            <img className="project-image" src={hottaste} alt="" />
          </div>
          <div className="description">
            <div className="name">
              Name:{' '}
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://hot-taste-restaurant.vercel.app/"
              >
                Hot Taste Restaurant
              </a>
            </div>
            <div className="name">
              Language and tools Used: Next.js, Sass, MongoDB, Redux, Framer
              motion, Next-Auth
            </div>
            <div className="name">
              Description: Used Next.js for this app for SSR. This is fully
              animated restaurant app. Used next-auth for authentication and
              framer motion for awesome animation. Redux as a state management
              and mongodb as a database. Used getServerSideProps for
              pre-rendering a page whose data must be fetched at request time.
            </div>
            <div className="name">
              <a
                target="blank"
                style={{ textDecoration: 'none' }}
                href="https://hot-taste-restaurant.vercel.app/"
              >
                Click to view
              </a>
            </div>
          </div>
        </div>
      </div>
      <p style={{ marginTop: '70px', textAlign: 'center', fontSize: '15px' }}>
        Please see my{' '}
        <a
          target="blank"
          style={{ textDecoration: 'none' }}
          href="https://github.com/Saral33?tab=repositories"
        >
          github repos
        </a>
        , for more projects
      </p>
    </div>
  );
};

export default Projects;
