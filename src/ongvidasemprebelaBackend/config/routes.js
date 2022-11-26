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
    
}