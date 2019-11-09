var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJst=require('passport-jwt').ExtractJwt;
var User= require('../models/User');
var settings = require('../config/settings');
module.exports = function(passport){
    var opts ={};
    opts.jstFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretorKey =settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload,done){
        User.findOne({id: jwt_payload.id},function(err,user){
            if(err){
                return done(err,false);
            }
            if(user){
                done(null,user);
            }
            else{
                done(null,false);
            }
        })
    }))
};