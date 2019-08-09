import React, {Component} from 'react';
import Post from './Post';
import Navigate from './Navigation';
import Footer from './Footer';


class PostService extends Component {
    render(){
        return (
            <div>
                <Navigate />
                <Post />
                <Footer />
            </div>
        );
    }
}
export default PostService