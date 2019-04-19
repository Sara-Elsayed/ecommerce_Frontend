import Axios from 'axios';
export const GETALL = 'GETALL';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
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

export const editProduct = (value)=>{
    return {
        type :EDIT_PRODUCT,
        product:value
    }
}

export const showProductDetails = (product) =>{
    return{
        type:SHOW_PRODUCT_DETAILS,
        product :product
    }
}

//action functions///////////////////////////////////////////////////////////////////////////

export const GetAllProduct = () => {
    return dispatch => {
        Axios.get(`${baseUrl}/products/`).then(res => {
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
};
export const editProductDetails =(productid)  =>{
    return dispatch =>{
        Axios.patch(`${baseUrl}/products/${productid}`, {
            headers :{
                Authorization : localStorage.getItem('token')
            }
        })
        .then(res =>{
            dispatch(editProduct(res.data))
        })
    }
}
export const viewProductDetails = (productid) =>{
    return dispatch =>{
        Axios.get(`${baseUrl}/products/${productid}`)
            .then(res => {
            dispatch(showProductDetails(res.data))
        })
    }
}
