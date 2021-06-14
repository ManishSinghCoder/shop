import axios from 'axios'
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SHOP_ALL_VIEW, SHOP_CREATE, SHOP_DELETE, SHOP_VIEW_BY_ID } from './Type'
export const login = (userdata, history) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    try {
        const res = await axios.post("http://127.0.0.1:8000/shop/Login", userdata, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data

        })
        history.push('/ShopIditem')
        localStorage.setItem("deatil", JSON.stringify(res.data))

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.detail
        });
    }

};
export const shopview = (shopdata) => async dispatch => {
    const config = {
        headers: {
            'Context-type': 'application/json'
        }
    }
    const response = await axios.get("http://127.0.0.1:8000/shop/alldata", shopdata, config)
    dispatch({
        type: SHOP_ALL_VIEW,
        payload: response.data
    })

};
export const shopcreate = (uploadData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }

    }
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/shop/shopcreate', uploadData, config)
        dispatch({
            type: SHOP_CREATE,
            payload: data
        })
    } catch (error) {
        dispatch({

        })
    }
}
export const shopbyid = (isAuthenticated) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `Bearer ${isAuthenticated.token}`,
            'Content-type': 'application/json'
        }
    }
    const { data } = await axios.get('http://127.0.0.1:8000/shop/viewdata', config)
    dispatch({
        type: SHOP_VIEW_BY_ID,
        payload: data
    })
    localStorage.setItem("detail", JSON.stringify(data))
}
export const shopdelete = (index, id, isAuthenticated) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `Bearer ${isAuthenticated.token}`,
            'Content-type': 'application/json'
        }
    }
    await axios.delete(`http://127.0.0.1:8000/shop/delete/${id}`, config)
    dispatch({
        type: SHOP_DELETE,
        payload: index
    })
}


export const Logout = (history) => async dispatch => {
    dispatch({
        type: LOGOUT,

    })
    history.push('/')

}