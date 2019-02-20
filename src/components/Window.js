import React, {Component} from 'react'
import { withRouter, NavLink, Link} from 'react-router-dom'
import Home from './Home'

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
            portfolio: false
        }
    }

    componentDidMount() {
        this.windowCheck()
    }

    // componentDidUpdate() {
    //     this.windowCheck()
    // }

    windowCheck = () =>{
        console.log('=-=-=-props', this.props)
        if(this.props.match.path !== "/"){
            this.setState({hidden: 'block'})
        } else {
        this.props.history.push('/home')
        }
    }


    dragOn=()=>{
        this.setState({
            dragging: true
        })
    }
    mouseMove=(e)=>{
        if(this.state.dragging){
            this.setState({
                top: e.clientY-25,
                left: e.clientX-25
            })
        }
    }

    dragOff=(e)=>{
        this.setState({
            dragging: false
        })
    }
    maximize=()=>{
        this.setState({hidden: 'block'})
    }

    minimize=()=>{
        this.setState({hidden: 'none'})
    }

    menuRender = (e) => {
        const {id} = e.target;

        this.setState({
            about: false,
            portfolio: false
        })
        if (id) {
            this.setState({[id]: true})
        }
    }

    render(){
        const {about, portfolio} = this.state
        const aboutStyle = about ? {display: "flex"} : {display: "none"}
        const portfolioStyle = portfolio ? {display: "flex"} : {display: "none"}
        return(
            <div className="home" onMouseMove={e=>this.mouseMove(e)}>
                <div className='icon' 
                    style={{top:`${this.state.top}px`, left: `${this.state.left}px`}} 
                    onMouseDown={()=>this.dragOn()}
                    onMouseUp={e=>this.dragOff(e)}
                    onDoubleClick={()=>this.maximize()}>
                    <i className="fas fa-keyboard"></i>
                    Bradley
                </div>
                <div className='window-container'  onClick={e=>this.menuRender(e)} style={{display:`${this.state.hidden}`}}>
                    <div className="window-top">
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
                                    <li>Blackjack</li>
                                    <li>The Fun</li>
                                    <li>Road Trip</li>
                                </ul>
                            </li>
                            <li id="about" onClick={e=>this.menuRender(e)}>About
                                <ul className="about-menu" style={aboutStyle}>
                                    {/* <Link to="/home" style={{textDecoration: "none"}}> */}
                                        <li> LinkedIn</li>
                                    {/* </Link>    */}
                                    <li> GitHub</li>
                                    <li> Resume</li>
                                </ul>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="route-container">
                        {this.props.match.path === "/home" && <Home />}
                    </div>
                </div>
            </div>
        )
    }


}

export default withRouter(Window)