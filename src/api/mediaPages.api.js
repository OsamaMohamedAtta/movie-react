const url = 'https://api.themoviedb.org/3/'
const endPoint = '/popular?api_key=c7a2d60eee80735bbfdf95a69863740e&language=en-US&page='

function getMedia(type, pageNumber, setData, setError, setLoading) {
    fetch(`${url}${type}${endPoint}${pageNumber}`).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response
    }).then(data => {
        setData(data.results)
    }).catch(error => {
        setError(error)
    }).finally(() => {
        setLoading(false)
    })
}

export default getMedia