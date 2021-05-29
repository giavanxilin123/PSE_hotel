const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit: 10,
    password: 'Thientai1997',
    user: 'root',
    database: 'PSE',
    host: 'localhost',
    port: '3306'
});

// hihi.one = (id) => {
//     return new Promise((resolve, reject) =>{
//         conn.query(`SELECT * from products WHERE product_id = ?`,[id], (err, res) => {
//             if(err){
//                 return reject(err)
//             }
//             return resolve(res[0]);
//         })
//     })
// }

// hihi.users = () => {
//     return new Promise((resolve, reject) =>{
//         conn.query(`SELECT * from users`, (err, res) => {
//             if(err){
//                 return reject(err)
//             }
//             return resolve(res);
//         })
//     })
// }

module.exports = conn;
