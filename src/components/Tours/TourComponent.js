import React, { Component } from 'react';
import { MDBBtn, MDBIcon } from "mdbreact";
import TourModal from './TourModalComponent';
import './Tour.scss';

export default class Tour extends Component {
   
    render() {
        const { id, city, img, name, info, details } = this.props.tour;
        const { closeTour, showInfo, toggleInfo, showModal, toggleModal } = this.props;

        
        return (        
            <article className='tour'>
                <div className='img-container'>
                    <img             
                    src={img}
                    alt={name} />
                    <span className="close-btn" onClick={()=>closeTour(id)} >
                        <i className='fas fa-window-close' />
                    </span>
                </div>
                
                <div style={!toggleInfo[id] ? {height: 250} : null} className="col-12 tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>                                
                    <h5>
                        info{" "}
                        <span onClick={()=>showInfo(id)}>
                            <i className='fas fa-caret-square-down' />
                        </span>                
                    </h5>
                    {toggleInfo[id] && <p>{info}</p>}             
                    <ButtonPage handleModal={()=>showModal(id)} />
                    <TourModal key={id} city={city} details={details} showModal={toggleModal[id]} handleModal={()=>showModal(id)} />
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

