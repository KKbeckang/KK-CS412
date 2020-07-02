const express = require('express');
const router = express.Router();
// a route menu//
router.get('/', function(req, res, next) {
    res.send('Welcome to ps3pug Rongda place.');
});

router.get('/forget', function(req, res, next) {
    res.render('forget', { string: 'whatsup perryd! the chinese translation would be 皮瑞东瀚' });
});

router.route('/forpost')
    .post((req, res, next) => {
        res.render('forpost', { string: req.body.string, length: req.body.string.length});
    })

module.exports = router;
