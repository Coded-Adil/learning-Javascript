function sendNotification(email) {
    if(typeof email === 'string' && email.includes('@')){
        const part = email.split('@');
        const username = part[0];
        const domain = part[1];
        return username + " sent you an email from " + domain;
    } else {
        return "Invalid Email";
    }
}