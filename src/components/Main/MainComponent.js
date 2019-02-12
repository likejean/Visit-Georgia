import React, { Component } from 'react';
import Home from '../Home/HomeComponent';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Activities from '../ActivitiesComponent/ActivitiesComponent';
import Tours from '../Tours/ToursListComponent';
import Lodging from '../Lodging/LodgingComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeTour, fetchTours, showInfo, showModal } from '../../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        tours: state.tours,
        lodging: state.lodging,
        features: state.features,
        activities: state.activities
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTours: () => dispatch(fetchTours()),
    closeTour: (id) => dispatch(closeTour(id)),
    showInfo: (id) => dispatch(showInfo(id)),
    showModal: (id) => dispatch(showModal(id))
})

class Main extends Component {   
    
    componentDidMount () {
        this.props.fetchTours();
    }
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
                    <Route exact path='/tours' component={() => 
                        <Tours 
                            tours={this.props.tours.tours} 
                            closeTour={this.props.closeTour}
                            showInfo={this.props.showInfo}
                            toggleInfo={this.props.tours.toggleInfo}
                            showModal={this.props.showModal}
                            toggleModal={this.props.tours.toggleModal}
                        />} 
                    />
                    <Route exact path='/lodging' component={() => <Lodging lodging={this.props.lodging}/>} /> 
                    <Redirect to='/home' />
                </Switch> 
                <Footer />          
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
