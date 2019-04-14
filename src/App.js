import React, { Component } from 'react';
import './App.css';

import Header from './containers/header/header';
import Home from './containers/home/home';
import addProduct from './containers/addProduct/addProduct';
import ProductDetails from './containers/product/ProductDetails';
import RegisterPage from './components/register';
import loginPage from './components/login';
import productsPerUser from './containers/products/productsPerUser'

import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signUp" exact component={RegisterPage}/>
					<Route path="/login" exact component={loginPage}/>
					<Route path="/addProduct" exact component={addProduct} />
					<Route path="/:id" exact component={ProductDetails} />
					<Route path="/user/:userid" exact component={productsPerUser}/>
				</Switch>
			</div>
		);
	}
}

export default App;
