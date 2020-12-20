import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Home/Header/Navbar/Navbar';

const AddMovie = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, event) => {
        const newMovie = {...data};
        fetch('https://afternoon-savannah-86330.herokuapp.com/addNewMovie',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newMovie)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('The movie is added successfully');
          event.target.reset();
        }
      })
    }
    return (
        <div>
            <Navbar/>
           <div className="bg-dark text-center" style={{ height: "90vh" }}>
           <h2 className="text-center">Add a new movie</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-4">
                            <input type="text" name="name" className="form-control" placeholder="Movie Name" ref={register({ required: true })}/>
                            {errors.name && <span className="error text-danger">Movie Name is required</span>}
                        </div>
                        <div className="form-group mb-4">
                            <input type="text" name="moviePoster" className="form-control" placeholder="Movie Poster image url" ref={register({ required: true })}/>
                            {errors.name && <span className="error text-danger">Image url is required</span>}
                        </div>
                        <div className="form-group mb-4">
                            <input type="text" name="showtime" className="form-control" placeholder="Set Show Time" ref={register({ required: true })}/>
                            {errors.name && <span className="error text-danger">Show Time is required</span>}
                        </div>
                        <div className="form-group mb-4">
                            <textarea type="text" name="description" className="form-control" rows="5" placeholder="Description" ref={register({ required: true })}/>
                            {errors.name && <span className="error text-danger">Description is required</span>}
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

export default AddMovie;