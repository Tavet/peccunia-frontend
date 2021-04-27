import axios from "axios";

const interceptRequests = (token?: string) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        axios.defaults.headers.common['Authorization'] = process.env.API_TOKEN
    }
}

export default interceptRequests;