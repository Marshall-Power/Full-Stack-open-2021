import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}



const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

<<<<<<< HEAD
const update = async (id, newObject) => {
    const request = await axios.put(`${baseUrl}/${id}`, newObject)

    return request.data
}

const remove = async (id) => {
    const request = await axios.delete(`${baseUrl}/${id}`)

    return request.data
}


export default { getAll, setToken, create, update, remove }
=======
export default { getAll, setToken, create }
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
