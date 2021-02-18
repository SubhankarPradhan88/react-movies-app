import React, {Component} from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import Typography from '@material-ui/core/Typography';
import './Details.css';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: moviesData.filter((mov) => {
                return mov.id === this.props.movieId
            })[0]
        }
    }
    
    render() {
        let { movie } = this.state;
        return (
            <div className="details">
                <Header/>
                <div className="flex-containerDetails marginTop16">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="h4" component="h4">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography> 
                                <span className="bold">Genres: </span> {movie.genres.join(', ')}
                            </Typography>
                        </div>
                        <div>
                            <Typography> 
                                <span className="bold">Duration: </span> {movie.duration}
                            </Typography>
                        </div>
                        <div>
                            <Typography> 
                                <span className="bold">Release Date: </span> {new Date(movie.release_date).toDateString()}
                            </Typography>
                        </div>
                        <div>
                            <Typography> 
                                <span className="bold">Rating: </span> {movie.censor_board_rating}
                            </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography> 
                                <span className="bold">Plot: </span> <a href={movie.wiki_url} target='_blank'>(Wiki Link)</a> {movie.storyline}
                            </Typography>
                        </div>
                    </div>
                    <div className="rightDetails">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;