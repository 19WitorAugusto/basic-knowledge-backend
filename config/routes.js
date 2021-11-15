module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .get(app.api.categories.get)
        .post(app.api.categories.save)


    //Cuidado com ordem! Tem que vir antes de /categories/:id
    app.route('/categories/tree')
        .get(app.api.categories.getTree)

    app.route('/categories/:id')
        .get(app.api.categories.getById)
        .put(app.api.categories.save)
        .delete(app.api.categories.remove)
}
