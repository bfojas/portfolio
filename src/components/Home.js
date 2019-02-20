import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.scss'


export function Home(props) {


    return(
        <div className="home-container">
            <div className="head-content">
                <div className="profile-image"></div>
                <div className="head-info">
                    <h1>BRADLEY FOJAS</h1>
                    <h3>FULL-STACK WEB DEVELOPER</h3>
                </div>
            </div>
            <div className="icon-container">
                <div>
                    <i className="fab fa-react"></i>
                    React
                </div>
                <div>
                    <i className="fab fa-node-js"></i>
                    Node.js
                </div>
                <div>
                    <i className="devicon-postgresql-plain"></i>
                    PostgreSQL
                </div>
                <div>
                    <i className="fab fa-js-square"></i>
                    JavaScript
                </div>
                <div>
                    <i className="fab fa-html5"></i>
                    HTML5
                </div>
                <div>
                    <i className="fab fa-css3-alt"></i>
                    CSS3
                </div>
            </div>
            <div className="home-content">
                <p>After many years as a biomedical technician tackling many complex technical issues, Bradley recently completed the Full-Stack Web Dev Immersive program at DevMountain Phoenix where he received much praise from his instructors and peers for his enthusiastic approach to learning and troubleshooting.</p>
                <p>Although he attended the coding bootcamp with no prior coding experience, Bradley was not only able to quickly gain comprehension of JavaScript, HTML and CSS, but also of a full-stack that included ReactJs, NodeJs and PostgreSQL.</p>
                <p>Feel free to click around the menus above to find more info about Bradley and his projects.</p>
            </div>
        </div>
    )
}

export default withRouter(Home);