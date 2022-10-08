import React from 'react';
import defaultImg from '../../img/default-movie.jpg'
import { Link } from 'react-router-dom';

const DisplaySearch = ({ data }) => {
    return (
        data.map((data) => {
            if (data.media_type === 'person')
                return (
                    <div className="col-lg-3 col-md-4 col-sm-12" key={data.id}>
                        <div className="section-info">
                            <div className="img-poster">
                                <img src={(data.profile_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.profile_path} className="skeleton skeleton-img-search" alt="img-poster" />
                                <p className="rate">{data.popularity}</p>
                                <Link to={`/details/${data.id}/${data.media_type}`} className="poster-layer media d-flex justify-content-center align-items-center">
                                    show more details
                                </Link>
                            </div>
                            <p className="title text-white mt-3 lh-1">{data.name}</p>
                        </div>
                    </div>
                )
            return (
                <div className="col-lg-3 col-md-4 col-sm-12" key={data.id}>
                    <div className="section-info">
                        <div className="img-poster">
                            <img src={(data.poster_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.poster_path}  className="skeleton skeleton-img-search" alt="img-poster" />
                            <p className="rate">{data.vote_average}</p>
                            <Link to={`/details/${data.id}/${data.media_type}`} className="poster-layer media d-flex justify-content-center align-items-center">
                                show more details
                            </Link>
                        </div>
                        <p className="title text-white mt-3 lh-1">{(data.title === undefined) ? data.name : data.title}</p>
                    </div>
                </div>
            )
        })
    );
}

export default DisplaySearch;
