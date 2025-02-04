function email_tek (email) {

    if(email.includes("@") && email.includes(".")){
        return true

    }else{
        return false
    }
   
}

module.exports = {email_tek}