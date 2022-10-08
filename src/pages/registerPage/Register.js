import React , {useState , useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputForm from '../../components/loginForm/InputForm';
import auth from '../../api/auth.api';
import '../../css/loading.css'
import './Register.css'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [userData , setData] =  useState({
       first_name : '',
       last_name : '',
       email : '',
       password : '',
       age : 0
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

    const handelInputsChange = ({target}) => {
        setData({...userData, [target.name] : target.value})
    }
    
    const Sumbit = () => {
        auth('signup', userData , setError , setLoading, navigate);
    }

    return (
        <section className="main-color register-section d-flex justify-content-center align-items-center w-100 h-100">
            <div className="container">
                <div className="row">
                    <div className="m-auto col-lg-9">
                        <div className="register-title text-white mb-4">
                            <h1>Register Form</h1>
                        </div>
                    </div>
                    <div className="m-auto col-lg-9">
                       <div className={`${(error != null) ? 'alert alert-danger' : ''}`}>{error}</div>
                        <form onSubmit={handleSubmit(Sumbit)}>
                            <InputForm errors ={errors.first_name} register ={register} inputName ='first_name' labelContent ='First Name:' type ='text' pattern ={/^[A-Za-z]{3,15}$/} requiredError ='"first_name" is required' patternError ='"first_name" is must be between 3 and 15 letters' handelInputs ={handelInputsChange} />
                            <InputForm errors ={errors.last_name} register ={register} inputName ='last_name' labelContent ='Last Name:' type ='text' pattern ={/^[A-Za-z]{3,15}$/} requiredError ='"last_name" is required' patternError ='"last_name" is must be between 3 and 15 letters' handelInputs ={handelInputsChange} />
                            <InputForm errors ={errors.age} register ={register} inputName ='age' labelContent ='Age:' type ='number' pattern ={/^(?:1[6-9]|[2-7][0-9]|80)$/} requiredError ='"age" is required' patternError ='"age" is must be between 16-80' handelInputs ={handelInputsChange} />
                            <InputForm errors ={errors.email} register ={register} inputName ='email' labelContent ='Email:' type ='email' pattern ={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} requiredError ='"email" is required' patternError ='"email" is not vaild' handelInputs ={handelInputsChange} />
                            <InputForm errors ={errors.password} register ={register} inputName ='password' labelContent ='Password:' type ='password' pattern ={/^[A-Za-z]\w{5,14}$/} requiredError ='"password" is required' patternError ='"password" is must be between 6 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter' handelInputs ={handelInputsChange} />
                            <div className="register-button mt-4">
                                <button className="btn btn-info d-flex align-item-center">{(!loading) ? 'Register' : <span className="loader"></span>}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
