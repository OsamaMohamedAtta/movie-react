/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SkeletonDetails from '../../components/skeletonDetailsLoader/SkeletonDetails';
import getDetails from '../../api/details.api';
import DisplayDetails from '../../components/displayDetails/DisplayDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css'


const Details = () => {
    const { id, type } = useParams();
    const [detailsData, setDetailsData] = useState({})
    const [loading, setLoding] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getDetailsData = async () => {
            await getDetails(id, type, setDetailsData, setError, setLoding)
        }
        getDetailsData()
    }, [])

    if (loading) return <SkeletonDetails />
    if (error) return (<> {toast.error("Something has been happened")} <ToastContainer /> </>)

    return (
        <section className="main-color details-section">
            <div className="container">
                <div className="row">
                    <DisplayDetails mediaType={type} data={detailsData}/>
                </div>
            </div>
        </section>
    );
}

export default Details;