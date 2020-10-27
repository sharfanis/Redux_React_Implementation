import {FETCH_POSTS , NEW_POSTS } from './types';
import Axios from 'axios';
import Posts from '../components/Posts';


export const fetchPosts = () => dispatch => {
    //thunk allows us return 
    // return function(dispatch) {
        //dispatch is like resolver or promise. 
        Axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then((res) => {
         dispatch({
             type: FETCH_POSTS,
             payload: res.data
         })
    
     });
    }
// }


export const createPost = (postData) => dispatch => {
    //thunk allows us return 
    Axios.post('https://jsonplaceholder.typicode.com/posts' , {
        title: postData.title,
        body: postData.body
      }).then((res) => {
        //this thing send reqquests to this fake api and then in response comes 
        //back with an id and it adds it to the setState. res.data holds what we have sent to the 
        //the server adn comes back with Id , title and completed . 
        console.log('the response', res.data);
        // Now we'll use redux.
        dispatch({
           type: NEW_POSTS ,
           payload: res.data
        });
      });
     // this.setState({title: '' , body: ''});  
    
    }