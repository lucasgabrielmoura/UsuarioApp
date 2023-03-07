import axios from "axios"


const apiCat = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search?limit=20"
})

export default apiCat;