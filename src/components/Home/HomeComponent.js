import React from 'react';
import CarouselPage from './HomeCarouselComponent';

function Home(props) {    
    const {features} = props;
    return(
        <CarouselPage features={features} />
    );
}

export default Home;