import React, { Component } from 'react';
import Home from '../Home/HomeComponent';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Activities from '../ActivitiesComponent/ActivitiesComponent';
import Tours from '../Tours/ToursListComponent';
import Lodging from '../Lodging/LodgingComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tours: state.tours,
        lodges: state.lodges,
        features: state.features,
        activities: state.activities
    }
}



class Main extends Component {   
    
    
    render() {

        const HomePage = () => {
            
            return (
                <Home data={this.props.features}/>
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/activities' component={() => <Activities activities={this.props.activities}/>} />                    
                    <Route exact path='/tours' component={() => <Tours tours={this.props.tours} />} />
                    <Route exact path='/lodging' component={() => <Lodging lodges={this.props.lodges}/>} /> 
                    <Redirect to='/home' />
                </Switch> 
                <Footer />          
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
