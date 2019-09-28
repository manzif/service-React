import React, {Component} from 'react';

class Post extends Component {
    render(){
        return (
            <div>
                <section id="post">
                <div className="container">
                    <div className="post">
                    <h3>Post a New Service</h3>
                    <div id="error-msg" className="error-msg"></div>
                    <div id="success-msg" className="success-msg"></div>
                    <form id="post1" name="posts">
                        <div>
                        <input
                            type="text"
                            placeholder="Enter Service Title..."
                            id="title"
                        />
                        </div>
                        <div>
                        <input
                            type="text"
                            placeholder="Enter Company Name..."
                            id="company"
                        />
                        </div>
                        <div className="post2">
                        <input type="file" id="image"  />
                        </div>
                        <div>
                        <textarea id="description"></textarea>
                        </div>
                        <div>
                        <button type="submit" className="button_1">Save</button>
                        </div>
                    </form>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}
export default Post