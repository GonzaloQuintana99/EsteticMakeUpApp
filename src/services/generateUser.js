const generateUser = (username, mail, pw, phone, dni) => {
    return {
            username: username,
            mail: mail,
            pw: pw,
            phone: phone,
            dni: dni
    }
}

export default generateUser;