import React,{  useEffect,useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card } from 'antd'
import { shopview } from '../action/shopauth'
import './View.css'


const Shopview = ({ shopview }) => {
    const details = useSelector(state => state.auth)
    const { allshop } = details
    const [serchterm, setSerchTerm] = useState("")
    const onSubmit =e =>{
        shopview()
    }
    return (
        <div id="bl">
             <input id="inp" type='text' placeholder="Search..."
                        onChange={(event)=>{
                            setSerchTerm(event.target.value)
                        }}/>
            <Button onClick={onSubmit} to="/" id="link">Search</Button>
            

            <div className='cont mt-5'>

                {allshop.filter((val)=>{
                    if(serchterm==""){
                        return val
                    }else if(val.title.toLowerCase().includes(serchterm.toLocaleLowerCase())){
                        return val
                    }
                })
                .map( item =><Card id="card">
                    <h4 id="h4">{item.title}</h4>
                    <img id="image" src={`http://127.0.0.1:8000${item.photo}`} />
                    <h6 id="h6">Rs. {item.price}.00 only/- </h6>
                    <p id="p">Quantity: {item.quantity} </p>
                    <date id="date">Date: {item.created_at}</date>  
                </Card>)}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    allshop: state.auth.allshop

})
export default connect(null, { shopview })(Shopview)