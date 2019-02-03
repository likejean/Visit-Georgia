import React, { Component } from 'react';
import CarouselPage from './TourCarouselComponent';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Modal.scss';

class ModalPage extends Component {

render() {
	const { id, showModal, handleModal, city, details } = this.props;
	
	return (
		<MDBContainer>			
			<MDBModal isOpen={showModal} toggle={handleModal}>
				<MDBModalHeader toggle={this.toggle}>{city}</MDBModalHeader>
				<MDBModalBody>	
					<CarouselPage key={id} images={details}/>		
				</MDBModalBody>
				<MDBModalFooter>
					<MDBBtn color="secondary" onClick={handleModal}>Close</MDBBtn>				
				</MDBModalFooter>
			</MDBModal>
		</MDBContainer>
		);
	}
}

export default ModalPage;