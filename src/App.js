import React, { Component } from 'react';
import Product from './components/Product';
import data from './data.json';
// import suburbs from 'json!../suburbs.json';

export default class App extends Component {
	state = { products: data.products };
	render() {
		return (
			<div className="grid-container">
				<header>
					<a href="/"> React shopping cart</a>
				</header>
				<main>
					<div className="content">
						<div className="main">
							<Product products={this.state.products} />
						</div>
						<div className="sidebar">side bar</div>
					</div>
				</main>
				<footer> ALL right reserve</footer>
			</div>
		);
	}
	componentDidMount() {
		console.log(this.state.products);
	}
}
