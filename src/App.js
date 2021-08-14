import React, { Component } from 'react';
import Cart from './components/cart';
import Filter from './components/filter';
import Product from './components/Product';
import data from './data.json';
// import suburbs from 'json!../suburbs.json';

export default class App extends Component {
	state = { products: data.products, size: '', sort: '', cartItems: [] };

	filterProducts = (e) => {
		console.log(e.target.value);
		if (e.target.value === ' ') {
			this.setState({
				size: e.target.value,
				products: data.products,
			});
		} else {
			this.setState({
				size: e.target.value,
				products: data.products.filter(
					(product) => product.availableSizes.indexOf(e.target.value) >= 0 // this means the size exist in the array
				),
			});
		}
	};
	// sort products
	sortProducts = (e) => {
		console.log(e.target.value);
		const { products, sort } = this.state;
		this.setState({
			sort: e.target.value,
			products: products.slice().sort((a, b) =>
				sort === 'Lowest'
					? a.price < b.price
						? 1
						: -1
					: sort === 'Highest'
					? a.price > b.price
						? 1
						: -1
					: // if none of this condition is apply sort base on id
					a._id < b._id
					? 1
					: -1
			),
		});
	};

	// add product to cart
	addProductToCart = (product) => {
		const cartItems = this.state.cartItems;
		let itemAlreadyIncart = false;
		// if product already in cart
		cartItems.forEach((item) => {
			if (item._id === product._id) {
				item.count++;
				itemAlreadyIncart = true;
			}
		});
		// if product is not in cart
		if (!itemAlreadyIncart) {
			cartItems.push({ ...product, count: 1 });
		}
		this.setState({
			cartItems: cartItems,
		});

		console.log(this.state.cartItems);
	};

	removeItemFromCart = (cartItem) => {
		const cartItems = this.state.cartItems;
		this.setState({
			cartItems: cartItems.filter((item) => cartItem._id !== item._id),
		});
	};

	render() {
		return (
			<div className="grid-container">
				<header>
					<a href="/"> React shopping cart</a>
				</header>
				<main>
					<div className="content">
						<div className="main">
							<Filter
								count={this.state.products.length}
								size={this.state.filter}
								sort={this.state.sort}
								filterProducts={this.filterProducts}
								sortProducts={this.sortProducts}
							/>
							<Product
								products={this.state.products}
								addProductToCart={this.addProductToCart}
							/>
						</div>
						<div className="sidebar">
							<Cart
								cartItems={this.state.cartItems}
								removeItemFromCart={this.removeItemFromCart}
							/>
						</div>
					</div>
				</main>
				<footer> ALL right reserve</footer>
			</div>
		);
	}
}
