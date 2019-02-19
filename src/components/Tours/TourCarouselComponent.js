import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import './Carousel.scss';

const CarouselPage = (props) => {
    console.log('TOURS',props) 
    return (
        <MDBContainer>        
            <MDBCarousel activeItem={1} length={props.images.length} showControls={true} showIndicators={true} className="z-depth-1">
                <MDBCarouselInner>
                    {props.images.map(item => {
                        return (
                            <MDBCarouselItem key={item.id} itemId={item.id}>
                                <MDBView>
                                    <img className="d-block w-100" src={item.img} alt={item.name} />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">{item.name}</h3>                                
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        );
                    })}            
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;