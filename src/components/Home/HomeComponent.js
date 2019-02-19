import React from 'react';
import CarouselPage from './HomeCarouselComponent';

function Home(props) {
    console.log('BEFORE',props)
    const {features} = props;
    console.log('AFTER',features)
    return(
        <div>
            <CarouselPage features={features} />
        </div>
    );
}

export default Home;