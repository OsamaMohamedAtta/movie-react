const url = 'https://route-egypt-api.herokuapp.com/'

function auth(endPoint, data, setError, setLoading, navigate) {
    setLoading(true)
    fetch(`${url}${endPoint}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
    }).then((response) => response.json())
    .then((result) => {
        if (result.message === 'success') {
            if(endPoint === 'signup'){
                navigate('/login')
            }else{
                localStorage.setItem('userToken' , result.token)
                navigate('/')
            }
        } else {
            setError(result.message)
            setLoading(false)
        }
    });
}

export default auth