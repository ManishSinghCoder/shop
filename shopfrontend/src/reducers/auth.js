import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SHOP_ALL_VIEW, SHOP_CREATE, SHOP_DELETE,  SHOP_VIEW_BY_ID } from "../action/Type"

const  initialState = {
    isAuthenticated:{},
    user:false,
    users:null,
    allshop:[],
    shop:[]

}
export default function auth(state = initialState, action){
    const {type,payload} = action
    switch(type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:payload,
                user:true,
                users:null

            }
        case LOGIN_FAIL:
            return{
                ...state,
                users: payload,
                user:false
            }
        case SHOP_ALL_VIEW:
            return{
                ...state,
                allshop:payload
            }
        case LOGOUT:
            return{
                ...state,
                isAuthenticated:{},
                user:false,
                users:null,
                shop:[]
            }
        case SHOP_CREATE:
            return{
                ...state,
                shop:[...state.shop,payload]
            }
        case SHOP_VIEW_BY_ID:
            return{
                ...state,
                shop:payload
            }
        case SHOP_DELETE:
            return{
                ...state,
                shop:[...state.shop.slice(0,payload),...state.shop.slice(payload+1)]
            }
        default:
            return state
    }
    
}