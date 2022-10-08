import React, { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputForm from '../../components/loginForm/InputForm';
import auth from '../../api/auth.api';
import '../../css/loading.css'
import './Login.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [userData, setData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        let isAuth = localStorage.getItem('userToken')
        if(isAuth !== null) {
            navigate("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handelInputsChange = ({ target }) => {
        setData({ ...userData, [target.name]: target.value })
    }

    const Sumbit = () => {
        auth('signin', userData , setError , setLoading , navigate);
    }

    return (
        <section className="main-color login-section d-flex justify-content-center align-items-center w-100 h-100 position-fixed">
            <div className="container">
                <div className="row">
                    <div className="m-auto col-lg-9">
                        <div className={`${(error != null) ? 'alert alert-danger' : ''}`}>{error}</div>
                        <form onSubmit={handleSubmit(Sumbit)}>
                            <InputForm errors={errors.email} register={register} inputName='email' labelContent='Email:' type='email' pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} requiredError='"email" is required' patternError='"email" is not vaild' handelInputs={handelInputsChange} />
                            <InputForm errors={errors.password} register={register} inputName='password' labelContent='Password:' type='password' pattern={/^[A-Za-z]\w{5,14}$/} requiredError='"password" is required' patternError='"password" is must be between 6 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter' handelInputs={handelInputsChange} />
                            <div className="login-button mt-4">
                                <button className="btn btn-info d-flex align-item-center">{(!loading) ? 'Login' : <span className="loader"></span>}</button>
                            </div>
                        </form>
                    </div>
                    <div className="login-footer text-center text-white mt-4">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
