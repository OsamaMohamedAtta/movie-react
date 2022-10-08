import React , { useState,useEffect } from 'react';
import getSearch from '../../api/search.api'
import DisplaySearch from '../../components/displaySearchData/DisplaySearch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Search.css'

const Search = () => {
    const [searchData, setSearchData] = useState([])
    const [value , setValue] = useState('')
    const [error, setError] = useState(null)

    const getInputValue = ({ target }) => {
        setValue(target.value)
    }

    useEffect(() => {
        if(value !== ''){
            getSearchData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const getSearchData = async () => {
        await getSearch(value, setSearchData, setError)
    }

    if (error) return (<> {toast.error("Something has been happened")} <ToastContainer /> </>)

    return (
        <section className={`main-color serach-section ${(searchData.length === 0) ? 'position-fixed' : 'position-relative'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 m-auto">
                        <div className="serch-form">
                            <input type="text" className="form-control" placeholder="Search" onChange={getInputValue} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <DisplaySearch data={searchData} />
                </div>
            </div>
        </section>
    );
}

export default Search;
