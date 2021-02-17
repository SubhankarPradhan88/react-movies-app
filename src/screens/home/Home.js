import React, { Component } from 'react';

import './Home.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import genres from '../../common/genres';
import artists from '../../common/artists';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListReleasedMovies: {
        paddingLeft: 20,
        width: '100%',
        flexWrap: 'wrap',
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    filterMoviesStyle: {
        width: '50%',
        margin: '20px 30px 20px 0',
        float: 'right'
    },
    releasedMoviesAlign: {
        margin: 10
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
 });

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            genres: [],
            artists: []
        }
    }

    movieNameChangeHandler = (e) => {
        this.setState({movieName: e.target.value});
    }
    genreSelectHandler = (e) => {
        this.setState({genres: e.target.value});
    }
    artistSelectHandler = (e) => {
        this.setState({artists: e.target.value});
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span> Upcoming movies </span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                            <GridListTileBar title={movie.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div>
                        <GridList cellHeight={350} cols={4} className={classes.gridListReleasedMovies}>
                            {moviesData.map(movie => (
                                <GridListTile key={movie.id} className={classes.releasedMoviesAlign}>
                                    <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div>
                        <Card className={classes.filterMoviesStyle}>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" onChange={this.movieNameChangeHandler} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox-genre">Genres</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox-genre" />}
                                        renderValue={selected => selected.join(', ')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox-artist">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox-artist" />}
                                        renderValue={selected => selected.join(', ')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateStart"
                                        label="Release Date Start"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateEnd"
                                        label="Release Date End"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <p>
                                    <FormControl className={classes.formControl}>
                                        <Button variant="contained" color="primary">
                                            APPLY
                                        </Button>
                                    </FormControl>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);