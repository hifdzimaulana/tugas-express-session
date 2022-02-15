function logout(req, res) {
    if (req.session.loggedin === true) {
        req.session.loggedin = false
    }

    res.send({
        login_status: false,
        message: "Berhasil logout"
    })
}

module.exports = logout