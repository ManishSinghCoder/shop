import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';


const Layout = ({  children }) => {
    useEffect(() => {
        
    }, []);

    return (
        <div>
            <Navbar />
            {children}
            
        </div>
    );
};

export default connect(null, {  })(Layout);