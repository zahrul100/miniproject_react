// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ActionType from "../../../../Context/ActionType";
const LoginBloc = (LoginService) => {
  let { postLogin } = LoginService();

  let navigate = useNavigate()
  const doLogin = async (formik,context) => {
    try {
      let res = await postLogin(formik.values);
      
    console.log(res)
    localStorage.setItem("token", res.data.data.token)
    context.dispatch({type:ActionType.LOGIN,token:res.data.data.token,name:res.data.data.name})
    
    navigate('/dashboard')
    } catch (err) {
        alert('Username or Password is invalid')
    }
  };
  return { doLogin };
};
export default LoginBloc;
