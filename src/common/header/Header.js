import React, {Component} from 'react';

import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = (props) => {
    return (
        <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    )
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: '',
            password: '',
            usernameRequired: "dispNone",
            userPasswordRequired: "dispNone"
        };
    }
    openModalHandler = () => {
        this.setState({
            value: 0,
            modalIsOpen: true
        });
    }
    closeModalHandler = () => {
        this.setState({
            username: '',
            password: '',
            modalIsOpen: false,
            usernameRequired: "dispNone",
            userPasswordRequired: "dispNone"
        });
    }
    tabChangeHandler = (event, value) => {
        this.setState({value});
    }
    loginClickHandler = () => {
        console.log('this.state.username', this.state.username);
        if(!this.state.username) {
            this.setState({usernameRequired: 'dispBlock'});
        }else {
            this.setState({usernameRequired: 'dispNone'});
        }
        if(!this.state.password) {
            this.setState({userPasswordRequired: 'dispBlock'});
        }else {
            this.setState({userPasswordRequired: 'dispNone'});
        }
    }
    inputUsernameChangeHandler = (e) => {
        let userNameVal = e.target.value.trim();
        this.setState({username: userNameVal});
    }
    inputPasswordChangeHandler = (e) => {
        let userPasswordVal = e.target.value.trim();
        this.setState({password: userPasswordVal});
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
                <Modal 
                    ariaHideApp={false} 
                    onRequestClose={this.closeModalHandler} 
                    isOpen={this.state.modalIsOpen} 
                    contentLabel="Login"
                    style={customStyles}
                >
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"/>
                        <Tab label="Register"/>
                    </Tabs>
                    {this.state.value === 0 && 
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username </InputLabel>
                                <Input id="username" type="text" onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="password">Password </InputLabel>
                                <Input id="password" type="password" onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.userPasswordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                                LOGIN
                            </Button>
                        </TabContainer>
                    }
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;