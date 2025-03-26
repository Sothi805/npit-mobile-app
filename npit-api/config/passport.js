const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

require('dotenv').config();

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

passport.use(new JWTStrategy(opts, async (jwtPayload, done)=> {
    try{
        const user = await User.findById(jwtPayload.id);
        if(user){
            return done(null, user);
        } else {
            return done(null, false);
        }
    }catch(err){
        return done(err, false);
    }
}));

module.exports = passport;