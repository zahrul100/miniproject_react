// import { useNavigate } from "react-router-dom";
import ActionType from "../../../../Context/ActionType";
const RegisterBloc = (RegisterService) => {
  let { postRegister } = RegisterService();
  const doRegister = async (formik,context) => {
    try {
      let res = await postRegister(formik.values);
      
    console.log(res)
    context.dispatch({type:ActionType.Register,token:res.data.token,name:res.data.data.name})
    } catch (err) {
        alert(err)
    }
  };
  return { doRegister };
};
export default RegisterBloc;
