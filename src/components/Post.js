import React, {Component} from 'react';
import '../styles/App.css';
import axios from "axios";

class Post extends Component {
    // // constructor(props) {
    // //     super(props);
    // //     this.state = {
    // //       title: "",
    // //       company: "",
    // //       description:"",
    // //       image:""
    // //     };
    // //   }
    // //   changeHandler = e => {
    // //     this.setState({ [e.target.name]: e.target.value });
    // //   };
    //   submitHandler = e => {
    //     e.preventDefault();
    //     let title = document.getElementById('title').value;
    //     let company = document.getElementById('company').value;
    //     let description = document.getElementById('description').value;
    //     let image = document.forms['posts']['image'].files[0];
    //     let error_msg = document.getElementById('error-msg');
    //     let success_msg = document.getElementById('success-msg');

    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('company', company);
    //     formData.append('description', description);
    //     formData.append('image', image);

    //     fetch('http://localhost:5000/api/services', {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json, text/plain, */*'
    //           // 'Content-type': 'multipart/form-data'
    //         },
    //         body: FormData
    //       })
    //       .then(res => res.json())
    //       .then(data => {
    //         if (data.status !== 201) {
    //           error_msg.style.display = 'block';
    //           error_msg.innerHTML = data.error;
    //         } else {
    //           success_msg.style.display = 'block';
    //           success_msg.innerHTML = data.message;
    //         }
    //         console.log(data);
    //       });
    //     };
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