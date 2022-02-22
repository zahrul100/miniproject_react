import { client } from "../../../../http-client/Client"

const LoginService = () =>{
    const postLogin = async(params)=>{
        const response = await client.post("/user/login",params)
        return response
    }
    const postLogout = async(params)=>{
        const response = await client.post("/user/logout")
        return response
    }
    return {postLogin,postLogout}
}
export default LoginService