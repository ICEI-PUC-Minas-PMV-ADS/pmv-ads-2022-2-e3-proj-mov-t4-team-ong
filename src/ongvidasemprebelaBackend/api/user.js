const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getHash = (password, callback) => {
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

    const update = (req, res) => {
        console.log('updating', req.body.imageURL.uri)
        getHash(req.body.password, hash => {
            const password = hash
            app.db('users')
                .update({ name: req.body.name, password, imageURL: req.body.imageURL })
                .where({ email: req.body.email})
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }
    
    return { save, update }
}