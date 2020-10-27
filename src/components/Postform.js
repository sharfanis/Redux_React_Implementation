import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

 class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
              title : '',
              body: ''
            };

            this.onchange = this.onChangeEvent.bind(this);
        } 

        onChangeEvent(e) {
            this.setState({ [e.target.name] : e.target.value});
        }

    onSubmit = (e) => {
        e.preventDefault();
          

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);




        // Axios.post('https://jsonplaceholder.typicode.com/posts' , {
        //     title: this.state.title,
        //     body: this.state.body
        //   }).then((res) => {
        //     //this thing send reqquests to this fake api and then in response comes 
        //     //back with an id and it adds it to the setState. res.data holds what we have sent to the 
        //     //the server adn comes back with Id , title and completed . 
        //     console.log('the response', res.data);
        //     // Now we'll use redux.
        //   });
        //   this.setState({title: '' , body: ''});
    }

    render() {
        return (
            <div>
             <h1> Add Post</h1>   
             <form onSubmit={this.onSubmit}>
                <div>
                <label> Title: </label> <br/>
                <input type="text" name="title"  onChange= {this.onchange} value={this.state.title} />
                </div>

                <div>
                <label> Body: </label> <br/>
                <textarea name="body" value={this.state.body}  onChange= {this.onchange} />
                </div>

                <br/>
                <button type="submit">Submit</button>
             </form>
            </div>
        )
    }
}



Postform.propTypes = {
    createPost : PropTypes.func.isRequired
}

// export default Postform;

export default connect(null , { createPost })(Postform)