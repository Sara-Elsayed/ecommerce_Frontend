import Axios from 'axios';
export const GETALL = 'GETALL';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SHOW_PRODUCT_DETAILS = 'SHOW_PRODUCT_DETAILS';

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

export const getAllProductsToState = (data) => {
    return {
        type: GETALL,
        products: data
    }
}

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        product: data
    }
}

export const removeProduct = (value) => {
    return {
        type: REMOVE_PRODUCT,
        product: value
    }
}
export const showProductDetails = (product) =>{
    return{
        type:SHOW_PRODUCT_DETAILS,
        product :product
    }
}

export const GetAllProduct = () => {
    return dispatch => {
        Axios.get(`${baseUrl}/products/`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
                dispatch(getAllProductsToState(res.data));
            })
    }
}

export const addProductToList = (product) => {
    return dispatch => {
        Axios.post(`${baseUrl}/products`, product, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            dispatch(addProduct(res.data));
            // this.props.history.push('/')
        })
    }
}

export const removeProductFromList = (id) =>{
    return dispatch => {
        Axios.delete(`${baseUrl}/products/${id}`,{
                headers:{
                    Authorization: localStorage.getItem('token')
                }
        }).then(res =>{
            dispatch(removeProduct(res.data));
        })
    }
}
export const viewProductDetails = (productid) =>{
    return dispatch =>{
        Axios.get(`${baseUrl}/products/${productid}`, {
            headers:{
                Authorization: localStorage.getItem('token')
            }})
            .then(res => {
            dispatch(showProductDetails(res.data))
        })
    }
}
