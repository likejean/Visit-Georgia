import React, { Component } from 'react';
import Tour from './TourComponent';
import './ToursList.scss';

export default class Tours extends Component  {
	
    render () { 
		
        return(
            <div className="tourlist">
				{this.props.tours.map(tour => {
					return(
						<Tour 
							key={tour.id} 
							tour={tour} 
							closeTour={this.props.closeTour}
							showInfo={this.props.showInfo}
							toggleInfo={this.props.toggleInfo}
							showModal={this.props.showModal} 
							toggleModal={this.props.toggleModal}
						/>
					)
				})}
			</div>
        );
    }    
}

