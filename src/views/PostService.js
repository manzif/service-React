import React, {Component} from 'react';
import Post from '../components/Post';
import Navigate from '../components/common/Navigation';
import Footer from '../components/common/Footer';


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