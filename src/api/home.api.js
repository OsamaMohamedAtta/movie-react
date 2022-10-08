const url = 'https://api.themoviedb.org/3/trending/'
const endPoint = '/day?api_key=c7a2d60eee80735bbfdf95a69863740e'

function getTrending(type, setData, setError, setLoading) {
    fetch(`${url}${type}${endPoint}`).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response
    }).then(data => {
        setData(data.results.splice(0, 10))
    }).catch(error => {
        setError(error)
    }).finally(() => {
        setLoading(false)
    })
}

export default getTrending