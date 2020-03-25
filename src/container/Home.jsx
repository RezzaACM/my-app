import React, { Component, Fragment } from 'react';
import YoutubeCom from '../components/YoutubeCom/YoutubeCom';
import Product from './product/Product';
import BlogPost from './BlogPost/BlogPost';
import './Home.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;