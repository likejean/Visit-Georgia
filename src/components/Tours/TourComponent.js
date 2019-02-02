import React, { Component } from 'react';
import './Tour.scss';
//import tourData from '/assets/images/tours/stGeorgeStabbingDragon.jpg';


export default class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {
        
    const { id, city, img, name, info } = this.props.tour;    
    const { removeTours } = this.props;
    //console.log(tourData)
    console.log(img)
    return (
        
        <article className='tour'>
            <div className='img-container'>
                <img             
                src={img}
                alt={name} />
                <span className="close-btn" onClick={()=>{removeTours(id)}} >
                    <i className='fas fa-window-close' />
                </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    info{" "}
                    <span onClick={this.handleInfo}>
                        <i className='fas fa-caret-square-down' />
                    </span>
                
                </h5>
                {this.state.showInfo && <p>{info}</p>}           
            </div>
        </article>
    )
  }
}
