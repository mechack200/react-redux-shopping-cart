import React, { Component } from 'react';
import { formatCurrency } from '../util';
import Fade from 'react-reveal/Fade';
import './product.css';
import { ProductModal } from './modal';
export default class Product extends Component {
	constructor() {
		super();
		this.state = {
			selectedProductItem: null,
		};
	}
	// open the selected item in a modal view
	openModal = (product) => {
		this.setState({ selectedProductItem: product });
		console.log(this.state.selectedProductItem);
	};
	// close modal
	closeModal = () => {
		this.setState({ selectedProductItem: null });
	};
	render() {
		const { addProductToCart } = this.props;
		const { selectedProductItem } = this.state;
		return (
			<div>
				<Fade bottom>
					<ul className="products">
						{this.props.products.map((product) => (
							<li key={product.id}>
								<div className="product">
									<a
										href={'#' + product.id}
										onClick={() => this.openModal(product)}
									>
										<img src={product.image} alt={product.title} />
										<p className="product-title">{product.title}</p>
									</a>
									<div className="product-price">
										<div className="price">{formatCurrency(product.price)}</div>
										<button
											className="button primary"
											onClick={() => addProductToCart(product)}
										>
											Add To Cart
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</Fade>
				{/* if selected product exist , then show the nodal components  */} */}
				{selectedProductItem && (
					<ProductModal
						product={selectedProductItem}
						closeModal={this.closeModal}
						addProductToCart={addProductToCart}
					/>
				)}
			</div>
		);
	}
}
