const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    console.log('payments')
    const getPayments = (req, res) => {
        app.db('payments')
            .where({ userId: req.params.userId })
            .then(proj => res.json(proj))
            .catch(err => res.status(400).json(err))
    }

    const save = (req, res) => {
        app.db('payments')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    return { getPayments, save }
}

