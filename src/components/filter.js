import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {
	render() {
		return (
			<div className="filter">
				<div className="filter-result">{this.props.count} Product</div>
				<div className="filter-sort">
					Order{' '}
					<select value={this.props.sort} onChange={this.props.sortProducts}>
						<option>Latest</option>
						<option value="Lowest">Lowest</option>
						<option value="Highest">highest</option>
					</select>
				</div>
				<div className="filter-size">
					Filter{' '}
					<select value={this.props.size} onChange={this.props.filterProducts}>
						<option value="">ALL</option>
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
						<option value="L">L</option>
					</select>
				</div>
			</div>
		);
	}
}
