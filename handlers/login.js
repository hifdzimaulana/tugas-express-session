const db = require('../config/db')

function login(req, res) {
    var { email, password } = req.body

    const q = "SELECT * FROM user WHERE email = ? AND password = ?"

    if (email && password) {
        db.query(q, [email, password], (err, rows) => {
            if (err) throw err

            else if (rows.length > 0) {
                req.session.loggedin = true
                req.session.email = email
                res.send({
                    login_status: true,
                    message: `Selamat! ${email} berhasil login.`
                })
            }

            else {
                res.status = 400
                res.send({
                    login_status: false,
                    message: 'Kredensial anda salah!'
                })
            }
        })
    }
}

module.exports = login