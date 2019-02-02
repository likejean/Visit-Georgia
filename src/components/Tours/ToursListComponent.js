import React, { Component } from 'react';
import {tourData} from '../../database/toursData';
import Tour from './TourComponent';
import './ToursList.scss';

export default class Tours extends Component  {
    state={
		tours: tourData
    } 
    
    removeTour = id => {
		const {tours} = this.state;
		const sortedTours = tours.filter(tour => tour.id !==id);
		this.setState({
			tours: sortedTours
		});
	}
    render () {
        
        const {tours} = this.state;
        return(
            <div className="tourlist">
				{tours.map(tour => {
					return(
						<Tour key={tour.id} tour={tour} removeTours={this.removeTour} />
					)
				})}
			</div>
        );
    }    
}

