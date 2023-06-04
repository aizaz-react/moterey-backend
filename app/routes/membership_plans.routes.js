const { authJwt } = require("../middlewares");
const controller = require("../controllers/membership_plans.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/api/membership_plans", controller.allMembershipPlans);
  app.get("/api/membership_plans/:id", controller.membershipPlansDetail);
  app.put("/api/membership_plans", controller.membershipPlansUpdate);
  app.post("/api/membership_plans", controller.membershipPlansCreate);

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
