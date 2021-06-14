import React,{useState} from 'react'
import { connect, useSelector } from 'react-redux'
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
import { shopbyid, shopdelete } from '../action/shopauth'
import './View.css'

const Shopauthview = ({ shopbyid,shopdelete }) => {
    const shopd = useSelector(state => state.auth)
    const { isAuthenticated, shop } = shopd
    const [serchterm, setSerchTerm] = useState("")
    const handledelete = (id) =>{
        const index = shop.findIndex(item=> item.id==id)
        shopdelete(index,id,isAuthenticated)
    }

    const onSubmit = e => {
        shopbyid(isAuthenticated)
    }
    return (
        <div id="bl">
            <input id="inp" type='text' placeholder="Search..."
                onChange={(event) => {
                    setSerchTerm(event.target.value)
                }} />
            <Button onClick={onSubmit}  id="link">Search</Button>


            <div className='cont mt-5'>

                {shop.filter((val) => {
                    if (serchterm == "") {
                        return val
                    } else if (val.title.toLowerCase().includes(serchterm.toLocaleLowerCase())) {
                        return val
                    }
                })
                    .map(item => <Card id="card">
                        <h4 id="h4">{item.title}</h4>
                        <img id="image" src={`http://127.0.0.1:8000${item.photo}`} />
                        <h6 id="h6">Rs. {item.price}.00 only/- </h6>
                        <p id="p">Quantity: {item.quantity} </p>
                        <date id="date">Date: {item.created_at}</date>
                        <Link onClick={()=>handledelete(item.id)} id="lin">DeleteItem</Link>
                    </Card>)}
            </div>
        </div>

    )
}
export default connect(null, ({ shopbyid,shopdelete })) (Shopauthview)