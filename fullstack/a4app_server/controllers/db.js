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

    // create users table
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
    },

    // create users table
    createCarsTable(req, res) {
      let sql = 'CREATE TABLE cars(id INT AUTO_INCREMENT, user_id INT, chassi_number VARCHAR(17) UNIQUE, plate VARCHAR(7) UNIQUE, brand VARCHAR(15) , model VARCHAR(15), color VARCHAR(15), release_year VARCHAR(4), PRIMARY KEY(id), FOREIGN KEY (user_id) REFERENCES users(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Cars table created');
      });
    },

    // add first user
    addCar1(req, res) {
      let car1 = {user_id: 1, chassi_number: "9BWDD21J814027665", plate: "HMT9887", brand: "Chevrolet", model: "Celta", color: "amarelo", release_year: "2008"};
      let sql = 'INSERT INTO cars SET ?';
      let query = db.query(sql, car1, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Car1 added');
      });
    }
  }
  return DbController
};