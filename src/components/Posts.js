import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

// Connects the components to the redux store . Now we have the value in the store
// We need to get the value to the posts component .


 class Posts extends Component {

    //  constructor(props) {
    //      super(props);
    //      this.state = {
    //          posts: []
    //      }
    //  }

componentWillMount() {
    // Axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then((res) => {
    //    this.setState({posts : res.data});
    // });

    this.props.fetchPosts();
}

componentWillReceiveProps(nextProps){
    if(nextProps.newPost) {
         this.props.posts.unshift(nextProps.newPost);
    }
}

    render() {

        //const postItems = this.state.posts.map( (post) => (
            const postItems = this.props.posts.map( (post) => ( 
            <div key = {post.id} >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            )); 
        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
