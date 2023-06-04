const { authJwt } = require("../middlewares");
const controller = require("../controllers/ad.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/api/ad", controller.Allads);

  app.get("/api/ad/:id", controller.AdDetail);
  app.put("/api/ad", controller.AdUpdate);
  app.post("/api/ad/filter", controller.AdFilter);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
