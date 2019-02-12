import React, { Component } from 'react';
import './Lodging.scss';

// Show 10+ listings of offerings from 5-star Hotel to backpacker hostel

class Lodging extends Component {

    render() {

        const { id, name, img, price, style, amenities, description } = this.props.lodging;
        const { lodging } = this.props;
        
        console.log(this.props);
        console.log(this.props.lodging);
        
        return (

            <div className="card" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                            <div className="resize">
                                <img src={lodging[0].img[0].img} alt='Spire view from balcony' />
                            </div>

                            <h5 className="mb-0">
                            {lodging[0].name} - {lodging[0].style} - {lodging[0].price}<i className="fa fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>
                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                        <div className="card-block">
                        {id}
                        {name}
                        {img}
                        {price}
                        {style}
                        {amenities}
                        {description}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                        <div className="resize">
                            <img src={lodging[0].img[1].img} alt='Spire view from balcony' />
                        </div>

                        <h5 className="mb-0">
                        {lodging[1].name} - {lodging[1].style} - {lodging[1].price}<i className="fa fa-angle-down rotate-icon"></i>
                        </h5>
                        </a>
                    </div>
                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="card-block">
                            {id}
                            {name}
                            {img}
                            {price}
                            {style}
                            {amenities}
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
export default Lodging;