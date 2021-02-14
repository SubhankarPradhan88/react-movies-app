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
            firstname: '',
            lastname: '',
            email: '',
            registerPassword: '',
            contactNo: '',
            usernameRequired: "dispNone",
            userPasswordRequired: "dispNone",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            registerFormPasswordRequired: "dispNone",
            contactNoRequired: "dispNone"
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
            firstname: '',
            lastname: '',
            email: '',
            registerPassword: '',
            contactNo: '',
            modalIsOpen: false,
            usernameRequired: "dispNone",
            userPasswordRequired: "dispNone",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            registerFormPasswordRequired: "dispNone",
            contactNoRequired: "dispNone"
        });
    }
    tabChangeHandler = (event, value) => {
        this.setState({value});
    }
    loginClickHandler = () => {
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
    registerClickHandler = () => {
        if(!this.state.firstname) {
            this.setState({firstnameRequired: 'dispBlock'});
        }else {
            this.setState({firstnameRequired: 'dispNone'});
        }
        if(!this.state.lastname) {
            this.setState({lastnameRequired: 'dispBlock'});
        }else {
            this.setState({lastnameRequired: 'dispNone'});
        }
        if(!this.state.email) {
            this.setState({emailRequired: 'dispBlock'});
        }else {
            this.setState({emailRequired: 'dispNone'});
        }
        if(!this.state.registerPassword) {
            this.setState({registerFormPasswordRequired: 'dispBlock'});
        }else {
            this.setState({registerFormPasswordRequired: 'dispNone'});
        }
        if(!this.state.contactNo) {
            this.setState({contactNoRequired: 'dispBlock'});
        }else {
            this.setState({contactNoRequired: 'dispNone'});
        }
    }
    handleChange = (e, check) => {
        switch(check) {
            case 'username':
                this.setState({username: e.target.value.trim()});
                break;
            case 'password':
                this.setState({password: e.target.value.trim()});
                break;
            case 'firstname':
                this.setState({firstname: e.target.value.trim()});
                break;
            case 'lastname':
                this.setState({lastname: e.target.value.trim()});
                break;
            case 'email':
                this.setState({email: e.target.value.trim()});
                break;
            case 'registerPassword':
                this.setState({registerPassword: e.target.value.trim()});
                break;
            case 'contactNo':
                this.setState({contactNo: e.target.value.trim()});
        }
    }

    render() {
        let {username, password, firstname, lastname, email, registerPassword, contactNo} = this.state;
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
                    {this.state.value === 0 ?
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username </InputLabel>
                                <Input id="username" type="text" onChange={(e) => this.handleChange(e, 'username')} value={username} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="password">Password </InputLabel>
                                <Input id="password" type="password" onChange={(e) => this.handleChange(e, 'password')} value={password} />
                                <FormHelperText className={this.state.userPasswordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                                LOGIN
                            </Button>
                        </TabContainer> : 
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name </InputLabel>
                                <Input id="firstname" type="text" onChange={(e) => this.handleChange(e, 'firstname')} value={firstname} />
                                <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name </InputLabel>
                                <Input id="lastname" type="text" onChange={(e) => this.handleChange(e, 'lastname')} value={lastname} />
                                <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="email">Email </InputLabel>
                                <Input id="email" type="email" onChange={(e) => this.handleChange(e, 'email')} value={email} />
                                <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="registerPassword">Password </InputLabel>
                                <Input id="registerPassword" type="password" onChange={(e) => this.handleChange(e, 'registerPassword')} value={registerPassword} />
                                <FormHelperText className={this.state.registerFormPasswordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="contactNo">Contact No. </InputLabel>
                                <Input id="contactNo" type="number" onChange={(e) => this.handleChange(e, 'contactNo')} value={contactNo} />
                                <FormHelperText className={this.state.contactNoRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>
                                REGISTER
                            </Button>
                        </TabContainer>
                    }
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;