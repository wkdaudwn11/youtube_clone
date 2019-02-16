export const join = (req,res) => res.render("join", {pageTitle: "Join"});
export const login = (req,res) => res.render("login", {pageTitle: "login"});
export const logout = (req,res) => res.render("logout", {pageTitle: "logout"});
export const users = (req,res) => res.render("user", {pageTitle: "user"});
export const usersDetail = (req,res) => res.render("usersDetail", {pageTitle: "usersDetail"});
export const editProfile = (req,res) => res.render("editProfile", {pageTitle: "editProfile"});
export const changePassword = (req,res) => res.render("changePassword", {pageTitle: "changePassword"});