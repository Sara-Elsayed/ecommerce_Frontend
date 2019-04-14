import React, { Component } from 'react';
import Product from '../product/product';
import ListingTools from '../listingTool/listingtool';
import Filters from '../filters/filters';


import Axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';



class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			prdcts:[]
		}
	}
	componentDidMount(){
                Axios.get(`${baseUrl}/products/user/${localStorage.getItem('userid')}`,{
                    headers:{
                        Authorization: localStorage.getItem('token')
                    }
                }).then(res => {
                    let arr = [];
                    for (const key in res.data) {
                        arr.push({
                            name:res.data[key].name,
                            description:res.data[key].desacription,
                            category:res.data[key].category,
                            price:res.data[key].price,
                            discount:res.data[key].discount,
                            isOnSale:res.data[key].isOnSale,
                            userid:res.data[key].userid,
                            image:res.data[key].image,
                            id:res.data[key]._id
                        })
                    }
                    this.setState({
                        prdcts:arr
                    })
                    })
	}
	render() {
		let products = this.state.prdcts.map((prdct) => {
			return (
				<Product
					key={prdct.id}
					product= {prdct}
				/>
			);
		});
		return (
            <div className="container">
            <Filters />
			<section className="item-listing">
            <ListingTools />
				<div className="item-listing__items item-listing--3items" style={{width:"100%"}}>{products}</div>
			</section>
            </div>
		);
	}
}

export default (Products);
