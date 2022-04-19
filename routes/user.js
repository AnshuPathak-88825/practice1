const express = require('express');
const passport = require('passport');
const router = express.Router();
const usercontroller = require('../controller/usercontroller');

router.get('/profile',passport.checkAuthentication, usercontroller.profile);
router.get('/signup', usercontroller.signup);
router.get('/signin', usercontroller.signin);
router.get('/signout', usercontroller.destroysession);


router.post('/create', usercontroller.create);
const todocontroller=require('../controller/to_docontroller');

// this middleware using for todo
router.use('/profile',require('../routes/todor'));

// this middleware using for links

router.use('/profile',require('../routes/links'));
router.post('/create-session', passport.authenticate(
    'local',
    {
        failureRedirect: '/user/signin'
    }
), usercontroller.createSession);

module.exports = router;