import axios from 'axios'
const KEY = 'AIzaSyD3BjmRVKKu9j5IqT1P4Yl0R_dOuFH6_O4';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});
