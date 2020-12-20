import React, { useEffect, useState } from 'react';
import AllMoviesInfo from './AllMoviesInfo';

const AllMovies = () => {
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allMovies')
        .then(res => res.json())
        .then(data => {
            setMovieInfo(data);
        })
    },[])
    return (
        <div className="text-white">
            <h1 className="text-center ">Movies</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        movieInfo.map(data => <AllMoviesInfo data={data} key={data._id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllMovies;