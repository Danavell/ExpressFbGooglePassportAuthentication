const passport = require('passport');
const strategy = require('passport-google-oauth20')

GoogleStrategy = strategy.Strategy

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (obj, done) {
    done(null, obj);
})

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            profileFields: ['id', 'email', 'name']
        },
        function (accessToken, refreshToken, profile, done) {
            const { email } = profile._json;
            const userData = {
                email,
            };

            // USER SHOULD BE ADDED TO APP DB AT THIS POINT
            console.log(userData)
            done(null, profile);
        }
    )
);