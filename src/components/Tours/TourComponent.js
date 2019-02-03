import React, { Component } from 'react';
import { MDBBtn, MDBIcon } from "mdbreact";
import TourModal from './TourModalComponent';
import './Tour.scss';



export default class Tour extends Component {
    state = {
        showInfo: false,
        showModal: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo            
        });
    }
    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal            
        });
    }


    render() {
        
    const { id, city, img, name, info, details } = this.props.tour; 
    // console.log(details)   
    const { removeTours } = this.props;
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
            
            <div style={!this.state.showInfo ? {height: 250} : null} className="col-12 tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>                                
                <h5>
                    info{" "}
                    <span onClick={this.handleInfo}>
                        <i className='fas fa-caret-square-down' />
                    </span>                
                </h5>
                {this.state.showInfo && <p>{info}</p>}             
                <ButtonPage handleModal={this.handleModal} />
                <TourModal key={id} city={city} details={details} showModal={this.state.showModal} handleModal={this.handleModal} />
            </div>
        </article>
        )
    }
}

const ButtonPage = ({handleModal}) => { 
    return (
        <MDBBtn color="primary" onClick={handleModal}>
            <MDBIcon icon="road" className="mr-1" /> Tour Map
        </MDBBtn>
    );
}

