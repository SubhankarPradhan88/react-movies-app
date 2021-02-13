import React, {Component} from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <img src={logo} className="app-logo" alt="logo" />
                <Button variant="contained" color="default">
                    Login
                </Button>
            </div>
        )
    }
}

export default Header;