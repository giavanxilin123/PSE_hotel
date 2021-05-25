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

router.post('/register', async (req, res, next) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const username = req.body.username;
        const email = req.body.email;
        db.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, hashedPassword],
            (err, result) =>{
                res.json(result)
            }
        )
    }catch{
        res.status(500).send();
    }
})

router.post('/login', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        `SELECT * FROM users WHERE username = '${username}'`,
        (err, body) => {
            if(body.length > 0){
                bcrypt.compare(
                    password,
                    body[0].password,
                    (err, result) => {
                        if(result){
                            res.status(200).send(body[0])
                            
                        }
                        else{
                            res.status(403).send({message : "Mật khẩu không chính xác"});
                        }
                    }
                )                     
            }else{
                res.status(404).send({message : "Tài khoản không tồn tại! "})
            }
        }
     )
})




module.exports = router;