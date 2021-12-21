import axios from "axios";

const primaryServer = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL === "DEVELOPMENT" ? "http://localhost:7001" : "http://localhost:7001",
    withCredentials: true,
    headers: {
        "content-Type": "application/json"
    }
});


primaryServer.interceptors.response.use(response => { return response }, error => {
    if (error.response.status === 401) {
        console.log(error)
    }
    return error.response;
})

export default primaryServer;