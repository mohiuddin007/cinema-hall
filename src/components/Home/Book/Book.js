import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { InformationContext } from '../../../App';
import Navbar from '../Header/Navbar/Navbar';

const Book = () => {
    const [allInfo, setAllInfo] = useContext(InformationContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allMovies')
        .then(res => res.json())
        .then(data => {
            setMovieInfo(data);
        })
    },[])

    const movie = movieInfo.find(movie => movie.id === id) || {};

    const onSubmit = (data, event) => {
        const newBooking = { ...data };
        fetch('http://localhost:5000/bookSeat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Booking successfully done');
                    event.target.reset();
                }
            })
    }
    return (
        <div>
            <Navbar />
            <div className="bg-dark text-center" style={{ height: "90vh" }}>
                <h2 className="text-center">Book Seat</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-4">
                                    <input type="text" name="name" className="form-control" placeholder="User Name" defaultValue={allInfo.displayName} ref={register({ required: true })} />
                                    {errors.name && <span className="error text-danger">Name is required</span>}
                                </div>
                                <div className="form-group mb-4">
                                    <input type="text" name="Email" className="form-control" placeholder="Email" defaultValue={allInfo.email} ref={register({ required: true })} />
                                    {errors.name && <span className="error text-danger">Email is required</span>}
                                </div>
                                <div className="form-group mb-4">
                                    <input type="text" name="movieName" className="form-control" placeholder="Movie Name" defaultValue={movie.name} ref={register({ required: true })} />
                                    {errors.name && <span className="error text-danger">Movie Name is required</span>}
                                </div>
                                <div class="input-group mb-3">
                                    <label className="input-group-text" for="inputGroupSelect01">Choose seat quantity</label>
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">four</option>
                                        <option value="5">Five</option>
                                        <option value="6">Six</option>
                                        <option value="7">Seven</option>
                                        <option value="8">Eight</option>
                                        <option value="9">Nine</option>
                                        <option value="10">Ten</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-danger px-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;