const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../configs/apiCONFIG');

router.route('/')
    .get(function (req, res, next) {
      res.render('index', {title:'Zip2Location'});
    })


router.route('/zip')
    .post(async (req, res, next) => {
      let result = await fetch(CONFIG.url + CONFIG.key + '/info.json/'+req.body.zipCode+'/');
      let zip = await result.json();
      console.log(zip);
      res.render('zip', {title:'Zip2Location',city:zip.city});
    })

module.exports = router;