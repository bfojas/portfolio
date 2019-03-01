import React, {Component} from 'react';
import { withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Project from './Project';

import "./Window.scss"

class Window extends Component{
    constructor(){
        super()
        this.state={
            top: `${window.innerHeight - 125}`,
            left: 50,
            dragging: false,
            hidden: 'none',
            about: false,
            portfolio: false,
            email: false
        }
    }

    componentDidMount() {
        this.windowCheck()
    }

    windowCheck = () =>{
        if(this.props.match.path !== "/"){
            this.setState({hidden: 'block'})
        } else {
            this.props.history.push('/home')
        }
    }

    dragOn = () => {
        this.setState({
            dragging: true
        })
    }
    mouseMove = (e) => {
        if (this.state.dragging) {
            this.setState({
                top: e.clientY-25,
                left: e.clientX-25
            })
        }
    }

    dragOff = (e) => {
        this.setState({
            dragging: false
        })
    }
    maximize = () => {
        this.setState({hidden: 'block'})
    }

    minimize = () => {
        this.setState({hidden: 'none'})
    }

    menuRender = (e) => {
        const {portfolio, about, email} = this.state;
        const {id} = e.target;
        if (id === "about") {
            this.setState({
                about: !about,
                portfolio: false,
                email: false
            })
        } else if ( id === "portfolio"){
            this.setState({
                portfolio: !portfolio,
                about : false,
                email: false
            })
        } else if ( id === "email"){
            this.setState({
                email: !email,
                about : false,
                portfolio: false
            })
        } else {
            this.setState({
                about: false,
                portfolio: false
            })
        }
    }

    render(){
        const {about, portfolio, email} = this.state
        const aboutStyle = about ? {display: "flex"} : {display: "none"}
        const portfolioStyle = portfolio ? {display: "flex"} : {display: "none"}
        const emailStyle = email ?  {display: "flex"} : {display: "none"}
        return(
            <div className="home" onMouseMove={e=>this.mouseMove(e)}>
                <div className='icon' 
                    style={{
                        top:`${this.state.top}px`, 
                        left: `${this.state.left}px`
                    }} 
                    onMouseDown={this.dragOn}
                    onMouseUp={e => this.dragOff(e)}
                    onDoubleClick={this.maximize}
                >
                    <i className="fas fa-keyboard"></i>
                    Bradley
                </div>
                <div className="icon-mobile" onClick={this.maximize}>
                    <i className="fas fa-keyboard"></i>
                    Bradley
                </div>
                <div className='window-container'  onClick={e=>this.menuRender(e)} style={{display:`${this.state.hidden}`}}>
                    <div className="window-top">
                        <div className="window-name">Bradley Fojas</div>
                        <button className="minimize-button" onClick={()=>this.minimize()}>
                            <i className="fas fa-caret-down"></i>
                        </button>
                    </div>
                    <div className="window-menu">
                        <ul>
                            <Link to="/home" style={{textDecoration: "none"}}>
                                <li>
                                    Home
                                </li>
                            </Link>      
                            <li id="portfolio" onClick={e=>this.menuRender(e)}>Portfolio
                                <ul className="portfolio-menu" style={portfolioStyle} >
                                    <li onClick={()=>{this.props.history.push('/project/blackjack')}}>
                                        Blackjack
                                    </li>
                                    <li onClick={()=>{this.props.history.push('/project/cardFun')}}>
                                        The Fun
                                    </li>
                                    <li onClick={()=>{this.props.history.push('/project/roadTrip')}}>
                                        Road Trip
                                    </li>
                                </ul>
                            </li>
                            <li id="email" onClick={e=>this.menuRender(e)}>Email
                                <ul className="email-menu" style={emailStyle}>
                                    <li>
                                        <a href="mailto:brad.fojas@yahoo.com" >
                                            brad.fojas@yahoo.com
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li id="about" onClick={e=>this.menuRender(e)}>About
                                <ul className="about-menu" style={aboutStyle}>
                                    <li>
                                        <a href="https://www.linkedin.com/in/bradley-fojas/">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/bfojas">
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="route-container">
                        {this.props.match.path === "/home" && <Home />}
                        {this.props.match.path === "/project/:id" && <Project />}
                    </div>
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        projectObject: state.projectObject
    }
}


export default withRouter(connect(mapStateToProps)(Window))