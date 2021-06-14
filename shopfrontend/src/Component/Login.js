import React, { useState } from 'react'
import { connect } from 'react-redux'
import {login} from '../action/shopauth'
import './logn.css'

const Login = ({login,users,history})=>{
  const [formData, setFromData] = useState({

  })
  

  const onChange = e => setFromData({...formData, [e.target.name]: e.target.value})
  const onSubmit = e =>{
    e.preventDefault();
    login(formData,history)
  }
return(
    <div className="myCard">
        <div className="col-md-6">
          <div className="myReftCtn">
            <form class="myForm text-center" onSubmit={e=> onSubmit(e)}>
           
              <header>Sign In</header>
              {users ? <h4 id="use">{users}</h4> : <></>}
              <div class="form-group">
                <i class="fas fa-user"></i>
                <input
                class = "myInput"
                type="text"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={onChange}
                required
                />
              </div>
              <div class="form-group">
                <i class="fas fa-user"></i>
                <input
                class = "myInput"
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={onChange}
                required
                />
              </div>
              <div class="form-group">
                <i class="fas fa-user"></i>
                <input
                class = "myInput"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={onChange}
                minLength='6'
                required
                />
              </div>
              <button type="submit" class="butt" >Login</button>
            </form>
          </div>
        </div>
        </div>
)
}
const mapStateToProps = state =>({
  users: state.auth.users
})
export default connect(mapStateToProps,{login}) (Login)