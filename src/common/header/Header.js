import React, {Component} from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
    }
    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
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

                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;