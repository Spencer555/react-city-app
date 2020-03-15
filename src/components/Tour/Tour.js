import React, { Component } from 'react';
import "./Tour.css"


class Tour extends Component {
    state={
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const{id, city,img,name,info} = this.props.tour
        const {removeTour} = this.props
        return (
            <article className="tour">
            <div className="img-container">
                 <img className="img" src={img} alt=""/>

                 <span className="close-btn" onClick={() => {removeTour(id)}} >
                    <span className="cls">X</span>
                 </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    info{" "}
                    <span onClick={this.handleInfo}>
                        +
                    </span>
                </h5>
                {this.state.showInfo && <p>{info}</p>}
                
            </div>
        </article>
        );
    }
}

export default Tour;