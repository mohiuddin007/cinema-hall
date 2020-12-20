import React from 'react';
import { Link } from 'react-router-dom';

const AllMoviesInfo = ({ data }) => {
    console.log(data);
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={data.moviePoster} className="card-img-top" style={{ height: '400px' }} alt="movie poster" />
                <div className="card-body bg-dark">
                    <h4 className="card-title">{data.name}</h4>
                    <p className="card-text"><b> Movie Description:</b> {data.description}</p>
                    <h6>Showtime: {data.showtime}</h6>
                    <Link to={`/bookSeat/${data._id}`}>
                    <button className="btn btn-primary">Book Seat</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllMoviesInfo;