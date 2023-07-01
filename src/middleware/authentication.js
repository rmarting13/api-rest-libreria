const passport = require('passport');
const passportJwt = require('passport-jwt');
const { Model } = require('sequelize');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = 'claveSecretaQueSoloConoceElServer';

passport.use(
    new JWTStrategy(
        {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
        }, 
        (jwtPayload, done) => {
            if (jwtPayload.user == 'admin') {
                const user = jwtPayload
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid user' });
            }
        } 
    )
);

module.exports = { secret };