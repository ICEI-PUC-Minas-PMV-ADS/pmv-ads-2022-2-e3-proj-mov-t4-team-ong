const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getOngs = (req, res) => {
    console.log('ongs', req)
        app.db('ongs')
            .orderBy('nameExtended')
            .then(ongs => res.json(ongs))
            .catch(err => res.status(400).json(err))
    }
    
    return { getOngs }
}