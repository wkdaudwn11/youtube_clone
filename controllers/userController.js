import routes from "../routes";

//export const join = (req,res) => res.render("join", {pageTitle: "Join"});

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
}

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
};

//export const login = (req,res) => res.render("login", {pageTitle: "login"});

export const getLogin = (req,res) => {
    res.render("login", {pageTitle: "Log In"});
}

export const postLogin = (req,res) => {
    res.redirect(routes.home);
}

export const logout = (req,res) => res.render("logout", {pageTitle: "logout"});
export const users = (req,res) => res.render("user", {pageTitle: "user"});
export const usersDetail = (req,res) => res.render("usersDetail", {pageTitle: "usersDetail"});
export const editProfile = (req,res) => res.render("editProfile", {pageTitle: "editProfile"});
export const changePassword = (req,res) => res.render("changePassword", {pageTitle: "changePassword"});