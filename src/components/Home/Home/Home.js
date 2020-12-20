import React from 'react';
import AllMovies from '../AllMovies/AllMovies';
import Header from '../Header/Header/Header';

const Home = () => {
    return (
        <div className="bg-dark">
            <Header/>
            <AllMovies/>
        </div>
    );
};

export default Home;