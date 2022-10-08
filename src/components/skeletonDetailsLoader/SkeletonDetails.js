import React from 'react';
import './SkeletonDetails.css'

const SkeletonDetails = () => {
    return (
        <section className="main-color details-section">
            <div className="container">
                <div className="row container-details">
                    <div className="col-lg-4 col-md-12">
                        <div className="skeleton-img-details skeleton"></div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="details-info">
                            <div className="skeleton skeleton-h2 mt-5 mb-3"></div>
                            <div className="d-inline-block skeleton skeleton-span mt-3"></div>
                            <div className="d-inline-block skeleton skeleton-span mt-3 mx-2"></div>
                            <div className="d-inline-block skeleton skeleton-span mt-3"></div>
                            <div className="skeleton skeleton-language my-3"></div>
                            <div className="skeleton skeleton-released my-3"></div>
                            <div className="skeleton skeleton-vate my-3"></div>
                            <div className="skeleton skeleton-overview my-3"></div>
                            <div className="skeleton skeleton-overview-line1"></div>
                            <div className="skeleton skeleton-overview-line2 my-1"></div>
                            <div className="skeleton skeleton-overview-line3 my-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkeletonDetails;