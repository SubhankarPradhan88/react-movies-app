import React, {Component} from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <Button variant="contained" color="default">
                    Login
                </Button>
            </div>
        )
    }
}

export default Header;