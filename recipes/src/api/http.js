import axios from "axios";

// API LOCATION
const baseUrl = "https://www.themealdb.com/api/json/v1/1";

let api = axios.create({
    baseURL: baseUrl,
    headers:
        {
            'Content-Type': 'application/json',
        }
});

api.interceptors.response.use(function (response)  {
        return response;
    }, function (error) {
        return Promise.reject(error);
})

export default api;
