import React, {Component} from 'react';

import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            value: 0
        };
    }
    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    }
    tabChangeHandler = (event, value) => {
        console.log('value ==>', value);
        this.setState({value});
    }
    render() {
        return (
            <React.Fragment>
                <header className="header-container">
                    <img src={logo} className="app-logo" alt="logo" />
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>
                        Login
                    </Button>
                </header>
                <Modal ariaHideApp={false} onRequestClose={this.closeModalHandler} isOpen={this.state.modalIsOpen} contentLabel="Login">
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"/>
                        <Tab label="Register"/>
                    </Tabs>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;