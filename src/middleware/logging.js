const loggingMdw = (req, res, next) => {
    console.log(`Request made at URL: ${req.url}`);
    res.setHeader('Content-Type', 'Application/json');
    next();
};

module.exports = loggingMdw;