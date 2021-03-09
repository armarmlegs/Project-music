module.exports = function protectRoute(req, res, next) {
    if (req.session.currentUser) {
        res.locals.isLoggedIn = true;
    }
    else res.redirect("/login");
    next();
}