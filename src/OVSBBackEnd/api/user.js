const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getUser = (req, res) => {
        console.log('getUser')
        app.db('users')
            .where({ email: req.user.email })
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
     }

    const getHash = (password, callback) => {
    console.log('Hash ')
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
    console.log('saving', req.body.name)
        getHash(req.body.password, hash => { 
            const password = hash
            app.db('users')
                .insert({ name: req.body.name, email: req.body.email, password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    const updateUser = (req, res) => {
        console.log('update', req.body.name)
        getHash(req.body.password, hash => {
            const password = hash
            app.db('users')
                .update({ name: req.body.name, password })
                .where({ email: req.user.email })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }
    
    return { save, getUser, updateUser }
}