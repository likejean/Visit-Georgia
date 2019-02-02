import React, { Component } from 'react';
import Home from '../Home/HomeComponent';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Activities from '../Activities/ActivitiesComponent';
import Tours from '../Tours/ToursListComponent';
import James from '../James/JamesComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    
    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={() => <Home />} />
                    <Route exact path='/activities' component={() => <Activities />} />                    
                    <Route exact path='/tours' component={() => <Tours />} />
                    <Route exact path='/james' component={() => <James />} /> 
                    {/* <Redirect to='/home' /> */}
                </Switch> 
                <Footer />          
            </div>
        );
    }
}

export default Main;