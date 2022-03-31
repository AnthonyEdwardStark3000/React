import axios from 'axios'; //for making api calls
const url = 'http://localhost:5000/posts';

//functions for calling the api's

export const fetchPosts = (function(){
    axios.get(url);
});
