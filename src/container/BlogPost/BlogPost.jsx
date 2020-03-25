import React, { Component, Fragment } from 'react';
import './BlogPost.css'
import PostComp from '../../components/PostComp/PostComp';
import axios from 'axios'

class BlogPost extends Component {

    state = {
        post: [],
        formBlog: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
    }


    getPostApi = () => {
        axios.get('http://localhost:3004/posts')
            .then((result) => {
                // console.log(result.data)
                this.setState({
                    post: result.data
                })
            })
            .catch(e => {
                console.log('Error:', e.result.data)
            })
    }

    hanldeRemove = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.getPostApi();
            })
    }

    putDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlog.id}`, this.state.formBlog)
            .then(
                (res) => {
                    console.log(res);
                    this.getPostApi();
                    this.setState({
                        isUpdate: false,
                        formBlog: {
                            id: 1,
                            title: '',
                            body: '',
                            userId: 1
                        }
                    })
                }
            )
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlog: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // console.log('from change', event.target)
        // console.log(this.state.formBlog)
        let formBlogPostNew = { ...this.state.formBlog };
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlog: formBlogPostNew
        }, () => {
            // console.log(this.state.formBlog)
        })
    }

    postDataToApi = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlog)
            .then((res) => {
                console.log(res)
                this.getPostApi()
                this.setState({
                    isUpdate: false,
                    formBlog: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
                })

            }, (err) => {
                console.log('error', err)
            })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToApi();
        } else {
            this.postDataToApi()
        }
    }

    componentDidMount() {
        this.getPostApi();
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlog.title} placeholder="add title here" id="" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" value={this.state.formBlog.body} rows="10" onChange={this.handleFormChange} ></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <PostComp key={post.id} data={post} remove={this.hanldeRemove} update={this.handleUpdate} />
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;