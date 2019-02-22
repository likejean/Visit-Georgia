import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './Carousel.scss';



class CarouselPage extends Component {
        constructor(props) {
            super(props);
            this.state = {                 
                caption: '',
                activeIndex: this.props.current
            };
            this.next = this.next.bind(this);
            this.previous = this.previous.bind(this);
            this.goToIndex = this.goToIndex.bind(this);
            this.onExiting = this.onExiting.bind(this);
            this.onExited = this.onExited.bind(this);            
        }
        
        onExiting() {
            this.animating = true;
        }
        
        onExited() {
            this.animating = false;
        }
        
        next() {            
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === this.props.features.length - 1 ? 0 : this.state.activeIndex + 1;
           
            this.setState({ 
                activeIndex: nextIndex,
                caption: this.props.features[nextIndex].name               
            });            
        }
        
        previous() {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? this.props.features.length - 1 : this.state.activeIndex - 1;
            
            this.setState({ 
                activeIndex: nextIndex,
                caption: this.props.features[nextIndex].name
            });            
        }
        
        goToIndex(newIndex) {
            if (this.animating) return;
            
            
            this.setState({ 
                activeIndex: newIndex,
                caption: this.props.features[newIndex].name 
            });            
        }
        
        render() {
            const { caption, activeIndex } = this.state; 
            const { getTitle } = this.props;           
            
            const slides = this.props.features.map((item) => {
                return (
                    <CarouselItem
                        className="custom-tag"
                        tag="div"
                        key={item.key}
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                    >
                        <img onClick={()=>getTitle(caption, activeIndex)} className='myImage' src={item.img} alt={item.name} />
                        <CarouselCaption captionText={item.name} captionHeader={item.name} />
                    </CarouselItem>
                    );
                });
        
            return (
                <div>
                    <style>
                        {
                            `.custom-tag {
                                max-width: 100%;
                                max-height: 100%;
                                background: black;
                            }`
                        }
                    </style>
                    
                    <Carousel                        
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        ride = 'carousel'
                                                                  
                    >                        
                        <CarouselIndicators items={this.props.features} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
            );
        }
    }



export default CarouselPage;
