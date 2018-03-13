module.exports = (app) => {
  const db = require('../libs/db_conn.js');

  const DbController = {
    // create db
    createDb(req, res) {
      let sql = 'CREATE DATABASE a4app_users';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Database created');
      });
    },

    // create table
    createUsersTable(req, res) {
      let sql = 'CREATE TABLE users(id INT AUTO_INCREMENT, name VARCHAR(55), age INT, email VARCHAR(55), street VARCHAR(55), city VARCHAR(55), state VARCHAR(55), PRIMARY KEY(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Users table created');
      });
    },

    // add first user
    addUser1(req, res) {
      let user1 = {name: 'Gabriel Miranda', age: 23, email: 'gabrielmirandatt@gmail.com', street: 'Cruzeiro Novo', city: 'Brasilia', state: 'DF'};
      let sql = 'INSERT INTO users SET ?';
      let query = db.query(sql, user1, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('User1 added');
      });
    }
  }
  return DbController
};