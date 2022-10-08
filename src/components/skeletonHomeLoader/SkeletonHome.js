import React from 'react';
import './SkeletonHome.css'

const SkeletonHome = () => {
    return (
        <section className="main-color home-section">
            <div className="trending-movies">
                <div className="container">
                    <div className="row container-trending-all">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="section-home-title">
                                <div className="skeleton skeleton-home-title"></div>
                                <div className="skeleton skeleton-home-title mt-3"></div>
                                <div className="skeleton skeleton-title-large mt-3"></div>
                                <div className="skeleton skeleton-title-large2 mt-3"></div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="skeleton skeleton-img-trending mt-3"></div>
                            <div className="skeleton skeleton-title mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkeletonHome;
