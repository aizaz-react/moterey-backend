const { authJwt } = require('../middlewares');
const controller = require('../controllers/user.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );

    next();
  });

  app.get('/api/user', controller.AllUsers);

  app.get('/api/user/:id', controller.UserDetail);
  app.put('/api/user', controller.UserUpdate);
  app.put('/api/user/admin', controller.UserUpdateAdmin);
  app.get('/api/user/admin', controller.GetAdmin);

  app.get(
    '/api/test/mod',
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    '/api/test/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
