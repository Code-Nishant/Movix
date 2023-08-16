import axios from "axios";

// api url 
const BASE_URL ="https://api.themoviedb.org/3";

// environment variables
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;

const headers={
    Authorization: "Bearer " +TMDB_TOKEN,
};

const fetchDataFromAPI = async(url,params)=>{
    try{
        const {data}= await axios.get(BASE_URL+url, {headers,params});
        return data;
    }
    catch(err){
        console.log(err);
        return err
    }

}
export default fetchDataFromAPI;