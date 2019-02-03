//  layout:
// header with nav bar ( on separate component)
// -Heading: What can you do in Georgia?
//     - explore a cave 
//     - crush fresh powder 
//     - discover Tbilisi
//     (could I have one image card expand to five onClick?)
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, Button } from 'reactstrap';



class Heading extends Component {
    render() {
        return(
            <h1>What Can You Do in Georgia?</h1>
        );
    }
}

class Caves extends Component {
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default Activities;