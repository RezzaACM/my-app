import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {

    state = {
        order: 4,
        name: 'Rezza'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://www.etanee.id/homescreen/apple-icon-180x180.png" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://image.flaticon.com/icons/png/128/1170/1170678.png" alt="" />
                        <p className="count">{this.state.order}</p>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;