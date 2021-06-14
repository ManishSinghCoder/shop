import React, { Fragment, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../action/shopauth';



const Navbar = ({user,Logout,history}) => {
    const [redirect, setRedirect]= useState(false)

    const logout_user = ()=>{
        Logout(history)
        setRedirect(true)
    }
    const guestLinks = () => (
        <Fragment>
           
            <li className='nav-item'>
                <Link className='nav-link' to='/Login' >OwnerLogin</Link>
            </li>
           
        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' onClick={()=>logout_user()}  >Logout</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/Shopadditem'  >Add item</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/ShopIditem'  >My item</Link>
            </li>
           
        </Fragment>
    );

    return (
        <Fragment>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-3'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarCollapse'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarCollapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                        
                            <Link className='nav-link' to='/'>ALLItem<span className='sr-only'></span></Link>
                        </li>
                        {user ? authLinks():guestLinks()  }
                    </ul>
                </div>
                
            </nav>
            {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, { Logout})(withRouter(Navbar));