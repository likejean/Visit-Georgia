import React, { Component } from 'react';
import Tour from './TourComponent';
import './ToursList.scss';


export default class Tours extends Component  {
	    
    removeTour = id => {		
		const {tours} = this.props;
		const sortedTours = tours.filter(tour => tour.id !==id);
		this.setState({
			tours: sortedTours
		});
	}
    render () {
        
        const {tours} = this.props;
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

