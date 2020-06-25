const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../configs/apiCONFIG');
const redis = require('redis');
const client = redis.createClient();

// client.flushdb((err, success) => {
//     if (err) { throw new Error(err)}
// });

// router.route('/')
//     .get(function (req, res, next) {
//       res.render('index', {title:'Zip2Location'});
//     })
//
//
// router.route('/zip')
//     .post(async (req, res, next) => {
//       let result = await fetch(CONFIG.url + CONFIG.key + '/info.json/'+req.body.zipCode+'/');
//       let zip = await result.json();
//       console.log(zip);
//       res.render('zip', {title:'Zip2Location',city:zip.city});
//     })
//

router.post('/', async function(req, res, next) {

    let Zipcoderec =  '/info.json/'+req.body.zipCode+'/'


    client.exists(Zipcoderec,async (err, response)=>{
        if(err){ throw new Error(err)}

        if(response == 1){
            client.get(Zipcoderec,(err, file_cabin)=>{
                console.log(file_cabin);
                file_cabin = JSON.parse(file_cabin)
                file_cabin.cached = true;
                res.send(JSON.stringify(file_cabin + ' cached '))
            })
        }
        else{
            let value = await fetch(CONFIG.url + CONFIG.key + '/info.json/'+req.body.zipCode+'/');
            let match = await value.json();
            console.log(match);
            client.set(Zipcoderec,JSON.stringify(match),(err)=>{
                if(err){ throw new Error(err)}

                client.expire(Zipcoderec,30);
                match.cached = false;
                res.send(JSON.stringify(match + ' kkached '))

            });
        }
    })
});
module.exports = router;
