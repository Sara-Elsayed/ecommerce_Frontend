import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Product extends Component {
	
	render() {
		let deletepro= null;
		let editpro = null ;
		if (this.props.product.userid === localStorage.getItem('userid')){
			deletepro = (
				<a onClick={() => this.props.deleteProduct(this.props.product.id)}>
							<i className="fas fa-trash-alt" />
						</a>
			);
			editpro = (
				<a onClick={()=>this.props.editProduct(this.props.product.id)}>
						<i className="fas fa-edit" />
					</a>
			)
		}
		let price = (<div>
			<span className="lable">${this.props.product.price}</span>
		</div>);
		if(this.props.product.isOnSale)
		{
			price = (<div>
				<del>${this.props.product.price}</del>
				<span className="lable">${parseInt(this.props.product.price) - parseInt(this.props.product.discount)}</span>
				<div className="item-medium-1__alert">Sale</div>
			</div>
			);
		}

		return (
			<div className="item-medium-1">
				<div
					className="item-medium-1__image image"
					style={{
						backgroundImage:
							`url('${this.props.product.image}')`
					}}
				>
					<a href="#" className="item-medium-1__action">
						Add to Cart
					</a>
				</div>
				<a href="#">
					<h4>{this.props.product.name}</h4>
					<div className="flex-row">
						{price}
					</div>
				</a>
				<div className="crud-actions">
					<NavLink to ={`/${this.props.product.id}`}>
						<i className="far fa-eye" />
					</NavLink>
					{deletepro}
					{editpro}
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteProduct: (prdctid) => dispatch( actionTypes.removeProductFromList(prdctid)),
		editProduct:(prdctid) => dispatch(actionTypes.editProductDetails(prdctid))
	};
};
export default connect(null, mapDispatchToProps)(Product);
