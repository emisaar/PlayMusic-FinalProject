import axios from "axios";

export default axios.create({
    baseURL: "https://www.playmusic.com.mx/api",
    headers: {
        "Content-type": "application/json",
    }
});
