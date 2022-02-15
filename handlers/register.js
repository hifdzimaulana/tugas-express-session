const db = require('../config/db')

function register(req, res) {
    var { name, email, password } = req.body

    const q = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)"

    if (name && email && password) {
        db.query(q, [name, email, password], (err, rows) => {
            if (err) throw err
            else {
                res.send({
                    message: `Selamat! berhasil register dengan email ${email}`
                })
            }
        })
    }
}

module.exports = register