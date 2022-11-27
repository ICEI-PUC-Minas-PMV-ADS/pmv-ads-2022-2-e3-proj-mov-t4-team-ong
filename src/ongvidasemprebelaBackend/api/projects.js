const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getProjects = (req, res) => {
        app.db('projects')
            .where({ ongId: req.params.ongId })
            .then(proj => res.json(proj))
            .catch(err => res.status(400).json(err))
    }

    return { getProjects }
}

