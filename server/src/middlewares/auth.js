const isAdminAuthenticated = (req, res, next) => {
    const token = "xyz";
    const isAuthenticated = token === "xyz";

    if(!isAuthenticated) {
        res.status(401).send("Unauthorized")
    } else (
        next()
    )
}

const isUserAuthenticated = (req, res, next) => {
    const token = "xyz";
    const isAuthenticated = token === "xyz";

    if(!isAuthenticated) {
        res.status(401).send("Unauthorized")
    } else (
        next()
    )
}

module.exports = {
    isAdminAuthenticated,
    isUserAuthenticated
}