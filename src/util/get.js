import axios from 'axios'


async function Get(url, ...p) {
    let result = []
    await axios.get(url)
        .then((response) => {           
           result.push(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    return result
}

export default Get;