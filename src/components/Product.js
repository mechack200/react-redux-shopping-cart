import React, { Component } from 'react';
import { formatCurrency } from '../util';
import './product.css';
export { formatCurrency } from '../util';

export default class Product extends Component {
	// const {products} =this.props
	render() {
		return (
			<div>
				<ul className="products">
					{this.props.products.map((product) => (
						<li key={product.id}>
							<div className="product">
								<a href={'#' + product.id}>
									<img src={product.image} alt={product.title} />
									<p className="product-title">{product.title}</p>
								</a>
								<div className="product-price">
									<div className="price">{formatCurrency(product.price)}</div>
									<button className="button primary">Add To Cart</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
