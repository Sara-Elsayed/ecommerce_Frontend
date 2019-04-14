import React, { Component } from 'react';

import Products from '../products/products';
import Filters from '../filters/filters';
import { NavLink } from 'react-router-dom';


class Home extends Component {
	render() {
		return (
			<div className="container">
				<Filters />
				<Products />
			</div>
		);
	}
}
export default Home;
