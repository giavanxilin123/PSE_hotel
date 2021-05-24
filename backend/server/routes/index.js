const express = require('express')
const db = require('../db')
const router = express.Router()
const bcrypt = require('bcrypt')

// router.get('/products', async(req, res, next) => {
//     try {
//         let results = await db.all();
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500)
//     }
// })

// router.get('/:id', async(req, res, next) => {
//     try {
//         let results = await db.one(req.params.id);
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500)
//     }
// })

// router.get('/users', async(req, res, next) => {
//     try {
//         let results = await db.users();
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500)
//     }
// })



router.post('/register', (req, res, next) => {
    // const body = req.body;

    // if(!(body.username && body.password)){
    //     return res.status(400).send({error: "Data not formatted properly"})
    // }

    // const user = {
    //     username: "van",
    //     email : "giavanxilin",
    //     password: "huhu"
    // }
    const username =  "giavan";
    const email =  "giavanxilin@gmail.com";
    const password = "12345678";

    db.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, password],
        (err, result) =>{
            console.log(err);
        }
    )
    // const salt =  bcrypt.genSalt(10)
    // user.password =  await bcrypt.hash(user.password, salt);
    // user.save().then((doc) => res.status(200).send(doc));
   
     
})



module.exports = router;