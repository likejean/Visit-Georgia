import React, { Component } from 'react';
import Header from '../Header/HeaderComponent';
import { Switch } from 'react-router-dom';
console.log(Header)

class Main extends Component {
    
    render() {

        return (
            <div>
                <Header />
                <Switch>

                </Switch>           
            </div>
        );
    }
}

export default Main;