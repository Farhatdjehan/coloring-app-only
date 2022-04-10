export const validateEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
}

export const validatePassword = (password, re_password)=>{
    return password === re_password
}
