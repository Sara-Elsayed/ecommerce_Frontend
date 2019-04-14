import React,{Component} from 'react';
import personalImage from '../../assets/img/PersonalImage.png';
import logo from '../../assets/img/logo.png';
import bag from '../../assets/img/icons/icon-cart-big.svg';
// import AddProduct from '../addProduct/addProduct';

import {NavLink} from 'react-router-dom';

class Header extends Component{
    render(){
        let myproducts= null;
		if (localStorage.getItem('token')){
			myproducts = (
				<NavLink className="nav__link" to={`user/${localStorage.getItem('userid')}`} exact>My Products</NavLink>			
			);
        }
        let cred = null ;
        let pack = null ;
        if(!localStorage.getItem('token')){
           cred=(<>
                <NavLink to='/signUp' exact className="link" style={{
                    padding:10,
                    backgroundColor:'#0088CC',
                    color:'black'
                }}>Sign Up</NavLink> 
               <NavLink to='/login' exact className="link">Sign In</NavLink> </>
               )       
        }else{
            pack =(
                <div className="image image--small" style={{backgroundImage: `url(${bag})`}}>
                        <div className="notification notification--danger">
                            1
                        </div>
                    </div>
            )
        }
        return(
    <div className="header">
    <div className="header__upper">
   
        <div className="container">
            <ul className="list list--hr list--hr-separator">
                <li className="list__item">
                    <span className="info">
                        <i className="info__icon far fa-dot-circle"></i>
                        <span className="info__data">1234 Street Name, City Name</span>
                    </span>
                </li>
                <li className="list__item">
                    <a href="#" className="info">
                        <i className="info__icon fab fa-whatsapp"></i>
                        <span className="info__data">123-456-7890</span>
                    </a>
                </li>
                <li className="list__item">
                    <a href="#" className="info">
                      
                        <i className="info__icon far fa-envelope"></i>
                      
                        <span className="info__data">mail@domain.com</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="header__middle container">
        <a href="#" className="header__logo-box">
            <img className="header__logo" src={logo} alt=""/>
        </a>
            <div className="header__user-options">
            <div className="dropdown">
                <div className="dropdown__header">
                {cred}
                </div>
                <div className="dropdown__body">

                </div>
            </div>
            <div className="dropdown dropdown--left  ">
                <div className="dropdown__header">
                    {pack}
                </div>
                <div className="dropdown__body">
                    <ul className="dropdown__items list list--vr-separator">
                        <li className="dropdown__item list__item">
                            <div className="item-small-1">
                                <div className="item-small-1__data">
                                    <a href="" className="item-small-1__title">Camera X1000</a>
                                    <span className="item-small-1__description">
                                        1 X $890
                                    </span>
                                </div>
                                <div className="item-small-1__image-box">
                                    <a href="#" className="item-small-1__image image">
                                    </a>
                                    <a href="#" className="item-small-1__action">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown__item list__item">
                            <div className="item-small-1">
                                <div className="item-small-1__data">
                                    <a href="" className="item-small-1__title">Camera X2000</a>
                                    <span className="item-small-1__description">
                                        2 X $990
                                    </span>
                                </div>
                               
                                <div className="item-small-1__image-box">
                                    <a href="#" className="item-small-1__image image" >
                                    </a>
                                    <a href="" className="item-small-1__action">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="separator"></div>
                    <div className="block">
                        <span className="lable">Total:</span>
                        <span className="lable">$2870</span>
                    </div>
                    <div className="block list list--hr">
                        <a className="list-item btn btn--gray" href="">View Cart</a>
                        <a className="list-item btn btn--primary" href="">Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header__lower container">
        <nav className="nav">
            <ul className="nav__items list list--hr">
                <li className="nav__item">
                    <NavLink to="/" exact className="nav__link">Home</NavLink>
                </li>
                <li className="nav__item dropdown ">
                    <a className="nav__link dropdown__header" href="#">
                        Products
                    </a>
                    <div className="dropdown__body">
                        <ul className=" list">
                            <li className="list__item">
                                <a className="nav__inner-link" href="#">Product Listing</a>
                            </li>
                            <li className="list__item">
                                <NavLink to="/addProduct" exact className="nav__inner-link" >Add Product</NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav__item">
				{myproducts}
                </li>
            </ul>
        </nav>
    </div>
    </div>
        )
    }
}
export default Header;