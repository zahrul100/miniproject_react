import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RootContext } from "../../App";


const Dashboard = ()=>{

  const data = useContext(RootContext);
const navigate = useNavigate()
 const handleLogout = ()=>{
    localStorage.removeItem('token');
     data.dispatch({ name: null, token: null })
     navigate('/login')
 }
return(<div>ini Dashboard
    <button onClick={handleLogout}>Logout</button>
</div>)
}
export default Dashboard