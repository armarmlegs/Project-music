module.exports = function protectAdmin(req, res, next) {
    if (req.session.currentUser && req.session.currentUser.role === "admin")
      next();
    else res.redirect("/login");
  };