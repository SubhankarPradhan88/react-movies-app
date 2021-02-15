import React, { Component } from 'react';

import './Home.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';

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
        padding: '15px',
        flexWrap: 'wrap',
        transform: 'translateZ(0)',
        width: '70%'
    },
    releasedMoviesAlign: {
        marginRight: '5px'
    }
 });

class Home extends React.Component {
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
                <GridList cols={4} className={classes.gridListReleasedMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id} className={classes.releasedMoviesAlign}>
                            <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                            <GridListTileBar
                                title={movie.title}
                                subtitle={<span>{movie.release_date}</span>}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

export default withStyles(styles)(Home);