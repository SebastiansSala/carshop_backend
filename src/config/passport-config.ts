import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { userModel } from "../models/user";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await userModel.findById(jwtPayload._id);
      if (user) return done(null, user);
      return done(null, false);
    } catch (error) {
      console.log(jwtPayload);
      return done(error, false);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
