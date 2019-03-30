import React from 'react';
import CarouselPage from './HomeCarouselComponent';
import JumbotronPage from './HomeJumbotron';

function Home(props) {    
    const {features, getTitle, caption, current} = props;
    
    return( 
        <React.Fragment>
            <JumbotronPage 
                caption={caption}
            />
            <CarouselPage 
                features={features} 
                getTitle={getTitle} 
                current={current}
                caption={caption}
            />
        </React.Fragment>
    );  
}

export default Home;