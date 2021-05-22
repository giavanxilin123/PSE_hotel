const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/products', async(req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

// router.get('/:id', async(req, res, next) => {
//     try {
//         let results = await db.one(req.params.id);
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500)
//     }
// })

router.get('/users', async(req, res, next) => {
    try {
        let results = await db.users();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

router.post('/users/login', async(req, res, next) => {
    const users = db.users()
    const user  = users.find(user => user.user_email = req.body.email)
    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await compare(req.body.password, user_pass)){
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    }catch{
        res.status(500).send()
    }
})



module.exports = router;