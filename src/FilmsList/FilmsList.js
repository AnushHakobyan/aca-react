import React from 'react';

const FilmsList = ({ films, markWatched }) => (
    <ul>
        {films.map(({ title, watched }) => <li key={title} onClick={title => markWatched(title)}>
            { watched ? <strike>{title}</strike> : <span>{title}</span> }

        </li>)}
    </ul>
);

export default FilmsList;
