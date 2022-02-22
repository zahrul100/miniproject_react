import { client } from "../../../../http-client/Client"

const RegisterService = () =>{
    const postRegister = async(params)=>{
        const response = await client.post("/user/register",params)
        return response
    }
    return {postRegister}
}
export default RegisterService