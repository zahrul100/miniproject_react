
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { RootContext } from '../App';

const MiddlewareAuth = ()=>{

    const data = useContext(RootContext);
    
    return(<div>  {data.userInfo ===null?<Navigate to="/login"/>:<>a</>} </div>)

}
export default MiddlewareAuth