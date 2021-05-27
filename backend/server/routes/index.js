const express = require('express')
const db = require('../db')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }

router.get('/users', authenticateToken ,(req, res, next) => {
    try {
        db.query(`SELECT * from users`, (err, result) => {
                if(err){
                   res.sendStatus(500)
                }else{
                    res.json(result)
                }
            });
    }catch{
        res.status(500).send()
    }
})


router.post('/register', async (req, res, next) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const username = req.body.username;
        const email = req.body.email;
        const nickname = req.body.nickname;
        
        db.query(
            "INSERT INTO users (username, email, password, nickname) VALUES (?, ?, ?, ?)",
            [username, email, hashedPassword, nickname],
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
                            const accessToken = jwt.sign({
                                userId : body[0]._id,
                                email: body[0].email
                            }, process.env.ACCESS_TOKEN_SECRET,
                            {
                                expiresIn: "1h"
                            }
                            )
                            res.status(200).send({
                               user: {
                                    nickname: body[0].nickname,
                                    username: body[0].username,
                                    email: body[0].email
                               },
                               accessToken : accessToken
                           })
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