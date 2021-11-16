module.exports = app => {

    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
    .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
    .all(app.config.passport.authenticate())
        .get(app.api.categories.get)
        .post(app.api.categories.save)

    app.route('/articles')
    .all(app.config.passport.authenticate())
        .get(app.api.articles.get)
        .post(app.api.articles.save)

    app.route('/articles/:id')
    .all(app.config.passport.authenticate())
        .get(app.api.articles.getById)
        .put(app.api.articles.save)
        .delete(app.api.articles.remove)


    //Cuidado com ordem! Tem que vir antes de /categories/:id
    app.route('/categories/tree')
    .all(app.config.passport.authenticate())
        .get(app.api.categories.getTree)

    app.route('/categories/:id')
    .all(app.config.passport.authenticate())
        .get(app.api.categories.getById)
        .put(app.api.categories.save)
        .delete(app.api.categories.remove)

    app.route('/categories/:id/articles')
    .all(app.config.passport.authenticate())
        .get(app.api.articles.getByCategory)
}