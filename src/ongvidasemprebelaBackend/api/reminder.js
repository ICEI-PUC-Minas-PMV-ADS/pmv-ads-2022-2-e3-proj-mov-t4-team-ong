const moment = require('moment')

module.exports = app => {
    console.log('get')
    const getReminders = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('day').toDate()

        app.db('reminders')
            .where({ userId: req.user.id })
            .where('estimateAt', '<=', date)
            .orderBy('estimateAt')
            .then(reminders => res.json(reminders))
            .catch(err => res.status(400).json(err))
    }

    const save = (req, res) => {
        if (!req.body.desc) {
            return res.status(400).send('Nome da atividade é um campo obrigatório.')
        }

        req.body.userId = req.user.id

        app.db('reminders')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('reminders')
            .where({ id: req.params.id, userId: req.user.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                } else {
                    const msg = `Não foi encontrada atividade com id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    const updateReminderDoneAt = (req, res, doneAt) => {
        app.db('reminders')
            .where({ id: req.params.id, userId: req.user.id })
            .update({ doneAt })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const toggleReminder = (req, res) => {
        app.db('reminders')
            .where({ id: req.params.id, userId: req.user.id })
            .first()
            .then(reminder => {
                if (!reminder) {
                    const msg = `Atividade com id ${req.params.id} não encontrada.`
                    return res.status(400).send(msg)
                }

                const doneAt = reminder.doneAt ? null : new Date()
                updateReminderDoneAt(req, res, doneAt)
            })
            .catch(err => res.status(400).json(err))
    }

    return { getReminders, save, remove, toggleReminder }
}