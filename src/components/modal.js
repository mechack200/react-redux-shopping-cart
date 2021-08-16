import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { formatCurrency } from '../util';
import './productModal.css';

export const ProductModal = ({ closeModal, product, addProductToCart }) => {
	return (
		<Modal isOpen={true} onRequestClose={closeModal}>
			<Zoom>
				<button className="close-modal" onClick={() => closeModal()}>
					X
				</button>
				<div className="product-details">
					<img src={product.image} alt="" />
					<div className="product-details-description">
						<p>
							<strong>{product.title}</strong>
						</p>
						<p>{product.description}</p>
						<p>
							avaliable sizes{' '}
							{product.availableSizes.map((size, i) => (
								<span>
									<button className="button" key={size}>
										{' '}
										{size}
									</button>
								</span>
							))}
						</p>
						<div className="product-price">
							<div className="price">{formatCurrency(product.price)}</div>
							<button
								className="button primary"
								onClick={() => {
									addProductToCart(product);
									closeModal();
								}}
							>
								add to cart
							</button>
						</div>
					</div>
				</div>
			</Zoom>
		</Modal>
	);
};
