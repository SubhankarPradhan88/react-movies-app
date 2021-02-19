import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

import './BookMyShow.css';
import Header from '../../common/header/Header';
import Home from '../home/Home';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';

class BookMyShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLocation : '',
            selectedLanguage : '',
            selectedShowDate : '',
            selectedShowTime : '',
            tickets : 0,
            unitPrice: 500,
            availableTickets: 20,
            reqLocation: "dispNone",
            reqLanguage: "dispNone",
            reqShowDate: "dispNone",
            reqShowTime: "dispNone",
            reqTickets: "dispNone"
        }
    }
    backToDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    locationChangeHandler = (e, check) => {
        (check === 'location') && this.setState({ selectedLocation: e.target.value });
        (check === 'language') && this.setState({ selectedLanguage: e.target.value });
        (check === 'showDate') && this.setState({ selectedShowDate: e.target.value });
        (check === 'showTime') && this.setState({ selectedShowTime: e.target.value });
    }
    ticketsChangeHandler = (e) => {
        this.setState({ tickets: e.target.value});
    }
    bookShowButtonHandler = () => {
        let { selectedLocation, selectedLanguage, selectedShowDate, selectedShowTime, tickets } = this.state;
        selectedLocation === "" ? this.setState({ reqLocation: "dispBlock" }) : this.setState({ reqLocation: "dispNone" });
        selectedLanguage === "" ? this.setState({ reqLanguage: "dispBlock" }) : this.setState({ reqLanguage: "dispNone" });
        selectedShowDate === "" ? this.setState({ reqShowDate: "dispBlock" }) : this.setState({ reqShowDate: "dispNone" });
        selectedShowTime === "" ? this.setState({ reqShowTime: "dispBlock" }) : this.setState({ reqShowTime: "dispNone" });
        tickets === 0 ? this.setState({ reqTickets: "dispBlock" }) : this.setState({ reqTickets: "dispNone" });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="bookShow">
                    <Typography className="back" onClick={this.backToDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="h5" component="h5">
                                BOOK SHOW
                            </Typography><br/>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">
                                    Choose Location:
                                </InputLabel>
                                <Select 
                                    value={this.state.selectedLocation}
                                    onChange={(e) => this.locationChangeHandler(e, 'location')}>
                                        {location.map(loc => (
                                            <MenuItem key={"loc" + loc.id} value={loc.location}>
                                                {loc.location}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText className={this.state.reqLocation}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">
                                    Choose Language:
                                </InputLabel>
                                <Select 
                                    value={this.state.selectedLanguage}
                                    onChange={(e) => this.locationChangeHandler(e, 'language')}>
                                        {language.map(lan => (
                                            <MenuItem key={"lan" + lan.id} value={lan.language}>
                                                {lan.language}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText className={this.state.reqLanguage}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">
                                    Choose Show Date:
                                </InputLabel>
                                <Select 
                                    value={this.state.selectedShowDate}
                                    onChange={(e) => this.locationChangeHandler(e, 'showDate')}>
                                        {showDate.map(date => (
                                            <MenuItem key={"date" + date.id} value={date.showDate}>
                                                {date.showDate}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText className={this.state.reqShowDate}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showTime">
                                    Choose Show Time:
                                </InputLabel>
                                <Select 
                                    value={this.state.selectedShowTime}
                                    onChange={(e) => this.locationChangeHandler(e, 'showTime')}>
                                        {showTime.map(time => (
                                            <MenuItem key={"time" + time.id} value={time.showTime}>
                                                {time.showTime}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText className={this.state.reqShowTime}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">Tickets: ({this.state.availableTickets} available) </InputLabel>
                                <Input id="tickets" value={(this.state.tickets) ? this.state.tickets : ''} onChange={this.ticketsChangeHandler} />
                                <FormHelperText className={this.state.reqTickets}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <Typography>
                                Unit Price Rs. {this.state.unitPrice}
                            </Typography>
                            <br/>
                            <Typography>
                                Total Price Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography>
                            <br/><br/>
                            <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                BOOK SHOW
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookMyShow;