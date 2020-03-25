import React, { Component, } from 'react';
// import './Product.css';

class CardProduct extends Component {

    state = {
        order: 4,
        name: 'Prawito '
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })


    }

    handleMinus = () => {
        // console.log('minus', this)
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, ()=> {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                </div>
                <p className="product-title">Daging Ayam Berbumbu Pedas</p>
                <p className="product-price">Rp.34.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;