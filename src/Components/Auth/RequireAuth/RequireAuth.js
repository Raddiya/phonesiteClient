import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../RequireAuth/RequireAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Spinner } from 'react-bootstrap';
const RequireAuth = ({ children }) => {
//   const [user, loading, error] = useAuthState(auth);
//   const location = useLocation();

//   useEffect(()=>{
//  if (error){
//    console.log(error)
//  }
//   },[error])
//   if (loading) {
//     return <div>
//       <Spinner animation="border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>
//     </div>;
//   }
//   if (user) {
//     console.log(user);
//     return children;
//   } else {
//     return <Navigate to="/login" state={{ form: location }} replace />

//   }
return children;
};

export default RequireAuth;