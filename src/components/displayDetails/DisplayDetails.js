import React from 'react';
import defaultImg from '../../img/default-movie.jpg'

function DisplayDetails({mediaType, data}) {
    if (mediaType === 'person') return (
        <>
            <div className="col-lg-4 col-md-12">
                <div className="img-details-poster">
                    <img src={(data.profile_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.profile_path} alt="poster-img" />
                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="details-info">
                    <h2 className="text-white mt-5 mb-3">{data.name}</h2>
                    <p className="text-white my-3 d-block vote-details">Popularity: <span>{data.popularity}</span></p>
                    <p className="text-white my-3">{(data.biography !== '') ? 'overView' : ''}</p>
                    <p className="text-gray my-3 lh-base">{data.biography}</p>
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className="col-lg-4 col-md-12">
                <div className="img-details-poster">
                    <img src={(data.poster_path == null) ? defaultImg : 'https://image.tmdb.org/t/p/w500' + data.poster_path} alt="poster-img" />
                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="details-info">
                    <h2 className="text-white mt-5">{data.title}</h2>
                    <span className={`mt-3 fs-5 ${(data.genres[0] === undefined) ? 'no-genres' : 'genres'}`}>{(data.genres[0] === undefined) ? '' : data.genres[0].name}</span>
                    <span className={`mt-3 fs-5 mx-2 ${(data.genres[1] === undefined) ? 'no-genres' : 'genres'}`}>{(data.genres[1] === undefined) ? '' : data.genres[1].name}</span>
                    <span className={`mt-3 fs-5 ${(data.genres[2] === undefined) ? 'no-genres' : 'genres'}`}>{(data.genres[2] === undefined) ? '' : data.genres[2].name}</span>
                    <p className="language my-3">{data.original_language}</p>
                    <p className="text-white my-3 air-released-details">Air Released: <span className="text-gray">{(data.release_date === undefined) ? data.first_air_date : data.release_date}</span></p>
                    <p className="text-white my-3 vote-details">Vate: <span>{data.vote_average}</span></p>
                    <p className="text-white my-3 vote-count-details">Vote Count: <span>{data.vote_count}</span></p>
                    <p className="text-white my-3">{(data.overview !== '') ? 'overView:' : ''}</p>
                    <p className="text-gray my-3 lh-base">{data.overview}</p>
                </div>
            </div>
        </>
    )
}

export default DisplayDetails;