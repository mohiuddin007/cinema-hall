import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/j4Gv7XY/cinema-01.jpg" className="d-block w-100 carouselImgStyle" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/6YcwGJZ/joker-reading-list-759.jpg" className="d-block w-100 carouselImgStyle" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/LpmDQjb/avengers-poster.jpg" className="d-block w-100 carouselImgStyle" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
};

export default HeaderMain;