import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    let location = useLocation();

    if(loading){
        return <Spinner animation="border" />;
    }
    if(user && user.uid){
        return children;
    }
    else {
      return  <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    
};

export default PrivateRouter;