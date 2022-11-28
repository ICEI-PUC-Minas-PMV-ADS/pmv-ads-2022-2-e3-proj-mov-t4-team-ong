const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        getHash(req.body.password, hash => { 
            const password = hash
            app.db('users')
                .insert({ name: req.body.name, email: req.body.email, password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    const update = (req, res) => {
        getHash(req.body.password, hash => {
            const password = hash
            app.db('users')
                .update({ name: req.body.name, password, imageURL: req.body.imageURL })
                .where({ email: req.body.email})
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }
    
    const getUser = (req, res) => {
        app.db('users')
            .where({ email: req.params.email })
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err))
    }

    return { save, update, getUser }
}