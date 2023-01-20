import React from 'react';

function GenreOptions( { genre } ){
    
    return (
        <option value={genre}>{genre}</option>
    )
}

export default GenreOptions;