const url = 'https://api.themoviedb.org/3/'
const endPoint = '?api_key=c7a2d60eee80735bbfdf95a69863740e&language=en-US'

function getDetails(id, type, setData, setError, setLoding){
    fetch(`${url}${type}/${id}${endPoint}`).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response
    }).then(data => {
        setData(data)
    }).catch(error => {
        setError(error)
    }).finally(() => {
        setLoding(false)
    })
} 

export default getDetails;
