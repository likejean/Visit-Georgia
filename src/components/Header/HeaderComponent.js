import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import image from '../../logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return (            
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand href="/">
                        <img src={image} height="75" width="100" alt='Visit Georgia' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/activities'><span className="fa fa-info fa-lg"></span> Activities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/tours'><span className="fa fa-list fa-lg"></span> Tours</NavLink>
                            </NavItem>                                
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>          
        );
    }
}
export default Header;