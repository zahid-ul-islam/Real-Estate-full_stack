import Axios from '../axios/index'

const signUpUser = async ({ name, email, password})=>{
    const user = await Axios.post('/signup', {name, email, password});
    return user;
}

export {
    signUpUser, 
}