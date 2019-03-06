import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderCardFun, renderRoadTrip, renderBlackjack, renderOhms } from '../ducks/reducer';
import './Project.scss'

class Project extends Component{
    constructor(props){
        super(props) 
        this.state = {
            images: []
        }
    }

    componentDidMount = () => {
        this.renderProject()
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.match.params !== this.props.match.params) {
            this.renderProject()
        }
    }

    renderProject = () => {
        const { renderCardFun, renderRoadTrip, renderBlackjack, renderOhms } = this.props
        const { id } = this.props.match.params;
        if (id === "roadTrip") {
            renderRoadTrip()
        };
        if (id === "cardFun") {
            renderCardFun()
        };
        if (id === "blackjack") {
            renderBlackjack()
        };
        if (id === "ohmsLaw") {
            renderOhms()
        };
    }


    render(){
        const {name, image, imageHeight, about, techUsed, projectLink} = this.props;
        console.log('-----images', image)
        const images = image && image.map(val => {
            return <div className="images" style={{backgroundImage: `url(${val})`, height: imageHeight}}></div>
        })
        return(
            <div className="project-container">
                <div className="project-head">
                    {`${name} PROJECT`}
                </div>
                <div className="project-body">
                    <div className="image-box">
                        {images}
                    </div>
                    <div className="summary-box">
                        <div className="project-about">{about}</div>
                        <div className="project-subject">LINK:</div>
                        {/* <div className="project-text">{projectLink}</div> */}
                        <a href={projectLink}>{projectLink}</a>
                        <div className="project-subject">TECHNOLOGIES USED:</div>
                        <div className="project-tech">{techUsed}</div>
                    </div>
                </div>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        image: state.image,
        imageHeight: state.imageHeight,
        about: state.about,
        techUsed: state.techUsed,
        projectLink: state.projectLink
    }
}

const mapDispatchToProps = {
    renderCardFun, 
    renderRoadTrip,
    renderBlackjack,
    renderOhms
}



export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Project))