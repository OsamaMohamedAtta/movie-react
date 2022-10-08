const url = 'https://api.themoviedb.org/3/search/multi?api_key=c7a2d60eee80735bbfdf95a69863740e&language=en-US&query='
const endPoint = '&page=1&include_adult=false'

function getSearch(value, setData, setError) {
    fetch(`${url}${value}${endPoint}`).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response
    }).then(data => {
        setData(data.results)
    }).catch(error => {
        setError(error)
    })
}

export default getSearch   