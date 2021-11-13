module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .post(app.api.categories.save)
        .get(app.api.categories.get)

    app.route('/categories/:id')
        .get(app.api.categories.getById)
        .put(app.api.categories.save)
        .delete(app.api.categories.remove)
}