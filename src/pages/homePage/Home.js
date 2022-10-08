import React, { useState, useEffect } from 'react';
import getTrending from '../../api/home.api';
import defaultImg from '../../img/default-movie.jpg'
import SkeletonHome from '../../components/skeletonHomeLoader/SkeletonHome';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'

const Home = () => {
    const [movieTrending, setMovieTrending] = useState([])
    const [tvTrending, setTvTrending] = useState([])
    const [peopleTrending, setPeopleTrending] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getAllTrending = async () => {
            await getTrending('movie', setMovieTrending, setError, setLoading)
            await getTrending('tv', setTvTrending, setError, setLoading)
            await getTrending('person', setPeopleTrending, setError, setLoading)
        }
        getAllTrending()
    }, [])

    if (loading) return <SkeletonHome />
    if (error) return (<> {toast.error("Something has been happened")} <ToastContainer /> </>)

    return (
        <section className="main-color home-section">
            <div className="trending-movies">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="section-home-title">
                                <h2>Trending</h2>
                                <h2>Movie</h2>
                                <h2>To Watch Now</h2>
                                <p className="text-gray">Most Watched Movies By Days</p>
                            </div>
                        </div>
                        {movieTrending.map(data => {
                            return (
                                <div className="col-lg-2 col-md-3 col-sm-12" key={data.id}>
                                    <div className="section-info">
                                        <div className="img-poster">
                                            <img src={(data.poster_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.poster_path} className="skeleton skeleton-img" alt="img-poster" />
                                            <p className="rate">{data.vote_average}</p>
                                            <Link to={`/details/${data.id}/${data.media_type}`} className="poster-layer d-flex justify-content-center align-items-center">
                                                show more details
                                            </Link>
                                        </div>
                                        <p className="title text-white mt-3 lh-1">{data.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="section-home-title">
                                <h2>Trending</h2>
                                <h2>Tv</h2>
                                <h2>To Watch Now</h2>
                                <p className="text-gray">Most Watched Movies By Days</p>
                            </div>
                        </div>
                        {tvTrending.map(data => {
                            return (
                                <div className="col-lg-2 col-md-3 col-sm-12" key={data.id}>
                                    <div className="section-info">
                                        <div className="img-poster">
                                            <img src={(data.poster_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.poster_path} className="skeleton skeleton-img" alt="img-poster" />
                                            <p className="rate">{data.vote_average}</p>
                                            <Link to={`/details/${data.id}/${data.media_type}`} className="poster-layer d-flex justify-content-center align-items-center">
                                                show more details
                                            </Link>
                                        </div>
                                        <p className="title text-white mt-3 lh-1">{data.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="section-home-title">
                                <h2>Trending</h2>
                                <h2>People</h2>
                                <h2>To Watch Now</h2>
                                <p className="text-gray">Most Watched Movies By Days</p>
                            </div>
                        </div>
                        {peopleTrending.map(data => {
                            return (
                                <div className="col-lg-2 col-md-3 col-sm-12" key={data.id}>
                                    <div className="section-info">
                                        <div className="img-poster">
                                            <img src={(data.profile_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.profile_path} className="skeleton skeleton-img" alt="img-poster" />
                                            <p className="rate">{data.popularity}</p>
                                            <Link to={`/details/${data.id}/${data.media_type}`} className="poster-layer d-flex justify-content-center align-items-center">
                                                show more details
                                            </Link>
                                        </div>
                                        <p className="title text-white mt-3 lh-1">{data.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
