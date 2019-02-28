import React from 'react';

const FilmsList = ({ films, markWatched }) => (
    <ul>
        {films.map(({ title, watched }) => <li key={title} onClick={(ev) => markWatched(ev,title)}>
            { watched ? <strike>{title}</strike> : <span>{title}</span> }

        </li>)}
    </ul>
);

export default FilmsList;
