import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderCardFun, renderRoadTrip, renderBlackjack } from '../ducks/reducer';
import './Project.scss'

class Project extends Component{

    componentDidMount = () => {
        this.renderProject()
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.match.params !== this.props.match.params) {
            this.renderProject()
        }
    }

    renderProject = () => {
        const { renderCardFun, renderRoadTrip, renderBlackjack } = this.props
        const { id } = this.props.match.params;
        if(id === "roadTrip") {renderRoadTrip()};
        if(id === "cardFun") {renderCardFun()};
        if(id === "blackjack") {renderBlackjack()};
    }


    render(){
        const {id} = this.props.match.params
        const {name, image, about, techUsed} = this.props
        return(
            <div className="project-container">
                <div className="project-head">
                    {`${name} PROJECT`}
                </div>
                <div className="project-body">
                    <div className="image-box">
                        <div className={image} ></div>
                    </div>
                    <div className="summary-box">
                        <div className="project-about">{about}</div>
                        <div className="tech-used">TECHNOLOGIES USED:</div>
                        <div className="project-tech">{techUsed}</div>
                    </div>
                </div>
            
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        name: state.name,
        image: state.image,
        about: state.about,
        techUsed: state.techUsed
    }
}

const mapDispatchToProps = {
    renderCardFun, 
    renderRoadTrip,
    renderBlackjack
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project))