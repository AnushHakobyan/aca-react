import React, { Component } from 'react';
import FilmsList from './FilmsList';
import FilmsListLoading from './FilmsListLoading';
import FilmsListTitle from './FilmsListTitle';

class FilmsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch(
            'https://ghibliapi.herokuapp.com/films')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    films: data.map(({ title }) => ({ title, watched: false })),
                    isLoading: false,
                })
            });
    }

    markWatched = (_, title) => {
        const updatedFilms = this.state.films.map(
            ({ filmTitle, watched }) =>  ({ title: filmTitle, watched: filmTitle === title }));
        this.setState({ films: updatedFilms });
    };

    render() {
        const { films, isLoading } = this.state;
        return (
            <div>
                <FilmsListTitle count={films.length} />
                {!isLoading
                    ? <FilmsList markWatched={this.markWatched} films={films} />
                    : <FilmsListLoading />}
            </div>
        )
    }
}

export default FilmsListContainer;
