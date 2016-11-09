var stetson = function (req, res, next) {
    req.stetson = {
        weight: "200",
        height: "6'0",
        wife: "sexy"
    };
    next();
};

module.exports = stetson;