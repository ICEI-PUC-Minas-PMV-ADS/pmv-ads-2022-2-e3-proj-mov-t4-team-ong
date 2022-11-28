module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

    app.route('/reminders')
        .all(app.config.passport.authenticate())
        .get(app.api.reminder.getReminders)
        .post(app.api.reminder.save)
    
    app.route('/reminders/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.reminder.remove)
    
    app.route('/reminders/:id/toggle')
        .all(app.config.passport.authenticate())
        .put(app.api.reminder.toggleReminder)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .put(app.api.user.update)   
   
    app.route('/users/:email')
        .all(app.config.passport.authenticate())
        .put(app.api.user.getUser)   
    
    app.route('/ongs')
        .all(app.config.passport.authenticate())
        .get(app.api.ong.getOngs)   
    
    app.route('/projects/:ongId')
        .all(app.config.passport.authenticate())
        .get(app.api.projects.getProjects)
    
    app.route('/payments/:userId')
        .all(app.config.passport.authenticate())
        .get(app.api.payments.getPayments)

    app.route('/payments')
        .all(app.config.passport.authenticate())
        .post(app.api.payments.save)
}