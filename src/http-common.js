import axios from "axios"

const dev = 'http://localhost:5000/quizit/api/v1/users'
const prod = 'https://gleaming-gray-gecko.cyclic.app/quizit/api/v1/users'

export default axios.create({
        baseURL: prod,
        headers: {
            'Content-type': 'application/json'
        }
    })
