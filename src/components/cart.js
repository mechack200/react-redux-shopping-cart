import React, { Component } from 'react';
import { formatCurrency } from '../util';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

import './cart.css';
export default class cart extends Component {
	constructor() {
		super();
		this.state = {
			selectedProductItem: null,
			checkout: false,
			name: '',
			email: '',
			address: '',
		};
	}

	createOrder = (e) => {
		// e.preventDefault();
		const { name, address, email } = this.state;
		const { creatOrder } = this.props;
		const order = {
			cartItems: this.props.cartItems,
			name,
			address,
			email,
		};
		creatOrder(order);
	};

	handleInputChange = (e) => {
		const value = e.target.value;
		this.setState({
			[e.target.name]: value,
		});
	};

	render() {
		const { cartItems, removeItemFromCart } = this.props;
		return (
			<div>
				{cartItems.length === 0 ? (
					<div className="cart-header header"> no item in cart </div>
				) : (
					<div className="cart-header header">
						You have {cartItems.length} item
						{cartItems.length === 1 ? '' : 's'} in your cart
					</div>
				)}
				<div>
					<div className="cart">
						<Fade left cascade>
							<ul className="cart-items">
								{cartItems.map((item) => (
									<li key={item._id}>
										<div>
											<img src={item.image} alt={item._id} />
										</div>
										<div>
											<div className="title">{item.title}</div>
											<div className="right">
												{formatCurrency(item.price)} X {item.count}
												<button
													className="button"
													onClick={() => removeItemFromCart(item)}
												>
													Remove from cart
												</button>
											</div>
										</div>
									</li>
								))}
							</ul>
						</Fade>
					</div>
					{/* if cart item is not equals to o then  */}
					{cartItems.length !== 0 && (
						<div>
							<div className="cart">
								<div className="total">
									<div>
										total:{' '}
										{formatCurrency(
											cartItems.reduce(
												(acc, current) => acc + current.price * current.count,
												0
											)
										)}
									</div>
									<button
										onClick={() => {
											this.setState({ checkout: true });
										}}
										className="button primary"
									>
										Proceed
									</button>
								</div>
							</div>
							<Rotate right cascade>
								{this.state.checkout && (
									<div className="cart">
										<form onSubmit={this.createOrder}>
											<ul className="form-container">
												<li>
													<label>Email</label>
													<input
														name="email"
														type="email"
														require="true"
														onChange={this.handleInputChange}
													/>
												</li>
												<li>
													<label>Name</label>
													<input
														name="name"
														type="text"
														require="true"
														onChange={this.handleInputChange}
													/>
												</li>
												<li>
													<label>AddresSs</label>
													<input
														name="address"
														type="text"
														require="true"
														onChange={this.handleInputChange}
													/>
												</li>
												<li>
													<button type="submit" className="button primary">
														{' '}
														checkout
													</button>
												</li>
											</ul>
										</form>
									</div>
								)}
							</Rotate>
						</div>
					)}
				</div>
			</div>
		);
	}
}
