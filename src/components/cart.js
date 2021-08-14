import React from 'react';
import { formatCurrency } from '../util';
import './cart.css';

const Cart = ({ cartItems, removeItemFromCart }) => {
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
				</div>
				{/* if cart item is not equals to o then  */}
				{cartItems.length !== 0 && (
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
							<button className="button primary">Proceed </button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
