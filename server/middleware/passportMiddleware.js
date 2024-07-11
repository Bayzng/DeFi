const passport = require("passport");

const authenticateGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });


const googleAuthCallback = passport.authenticate("google", {
	failureRedirect: "http://localhost:5174/auth", // Redirect on authentication failure
});


module.exports = {authenticateGoogle, googleAuthCallback };
