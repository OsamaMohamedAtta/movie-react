import React, { useState, useEffect } from 'react';
import getMedia from '../../api/mediaPages.api';
import defaultImg from '../../img/default-movie.jpg'
import SkeletonPages from '../../components/skeletonPagesLoader/SkeletonPages';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tv = () => {
    const [tvData, setTvData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getMediaData = async () => {
            await getMedia('tv', 1, setTvData, setError, setLoading)
        }
        getMediaData()
    }, [])

    const handlePageClick = async (pageNumber) => {
        let currentPage = pageNumber.selected + 1
        await getMedia('tv', currentPage, setTvData, setError, setLoading)
    }

    if (loading) return <SkeletonPages />
    if (error) return (<> {toast.error("Something has been happened")} <ToastContainer /> </>)

    return (
        <section className="main-color media-section">
            <div className="container">
                <div className="row justify-content-center">
                    {tvData.map(data => {
                        return (
                            <div className="col-lg-2 col-md-3 col-sm-12" key={data.id}>
                                <div className="section-info">
                                    <div className="img-poster">
                                        <img src={(data.poster_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.poster_path} className="skeleton skeleton-img" alt="img-poster" />
                                        <p className="rate">{data.vote_average}</p>
                                        <Link to={`/details/${data.id}/tv`} className="poster-layer media d-flex justify-content-center align-items-center">
                                            show more details
                                        </Link>
                                    </div>
                                    <p className="title text-white mt-3 lh-1">{data.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination handlePagination={handlePageClick} />
            </div>
        </section>
    );
}

export default Tv;