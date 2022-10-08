import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import profileImage from '../../img/profile.png'
import './Profile.css'

const Profile = () => {
    const userToken = localStorage.getItem('userToken')
    const userData = userToken == null ? "" : jwt_decode(userToken);
    const navigate = useNavigate()

    useEffect(() => {
        if (userToken == null) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="main-color w-100 h-100 profile-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 col-sm-12">
                        <div className="profile-img">
                            <img src={profileImage} alt="profile-img" />
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="profile-info">
                            <h4 className="text-gray">User_Name: <span>{userData.first_name}</span></h4>
                            <h4 className="text-gray my-4">User_Age: <span>{userData.age}</span></h4>
                            <h4 className="text-gray">User_Email: <span>{userData.email}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
