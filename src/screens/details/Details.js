import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import Home from '../../screens/home/Home';
import YouTube from 'react-youtube';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: moviesData.filter((mov) => {
                return mov.id === this.props.movieId
            })[0]
        }
    }
    
    backtohomeHandler = () => {
        ReactDOM.render(<Home/>, document.getElementById('root'));
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    
    render() {
        let { movie } = this.state;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className="details">
                <Header/>
                <div className="back">
                    <Typography onClick={this.backtohomeHandler}>
                        &#60; Back to Home
                    </Typography>
                </div>
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
                        <div className="trailerContainer">
                            <Typography>
                                <span className="bold">Trailer:</span>
                            </Typography>
                            <YouTube
                                videoId={movie.trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={this._onReady}
                            />
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