import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import image from '../../logo.png';
import './Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);        
        this.state = {
            isNavOpen: false,
            windowSize: window.innerWidth         
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }  

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.addEventListener("resize", null);
    }
    
    handleResize() {
        this.setState({windowSize: window.innerWidth})
    }

    render(){ 
        
        return (            
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand href="/">
                        <img style={this.state.windowSize > 250 ? {display: 'block'} : {display: 'none'}} src={image} height="95" width="120" alt='Visit Georgia' />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen && this.state.windowSize <= 768} navbar>
                        <Nav navbar>
                            <NavItem style={this.state.windowSize > 768 ? {width: this.state.windowSize/6} : {width: 200}}>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem style={this.state.windowSize > 768 ? {width: this.state.windowSize/6} : {width: 200}}>
                                <NavLink className="nav-link" to='/activities'><span className="fa fa-info fa-lg"></span> Activities</NavLink>
                            </NavItem >
                            <NavItem style={this.state.windowSize > 768 ? {width: this.state.windowSize/6} : {width: 200}}>
                                <NavLink className="nav-link" to='/tours'><span className="fa fa-car fa-lg"></span> Tours</NavLink>
                            </NavItem> 
                            <NavItem style={this.state.windowSize > 768 ? {width: this.state.windowSize/6} : {width: 200}}>
                                <NavLink className="nav-link" to='/lodging'><span className="fa fa-bed fa-lg"></span> Lodging</NavLink>
                            </NavItem>                               
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>          
        );
    }
}
export default Header;