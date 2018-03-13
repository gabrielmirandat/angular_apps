module.exports = (app) => {

  const db = require('../libs/db_conn.js');

  const UserController = {
    getAll(req, res) {
      let sql = 'SELECT * FROM users';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.json(results);
      })
    },

    get(req, res) {
      let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json(result);
      })
    },

    add(req, res) {
      let user = req.body;
      console.log(user)
      let sql = 'INSERT INTO users SET ?';
      let query = db.query(sql, user, (err, result) => {
        if(err) throw err;
        res.send(user.id);
      });
    },

    update(req, res) {
      let user = req.body.user;
      let sql = `UPDATE users SET ? WHERE id = ${req.params.id}`;
      let query = db.query(sql, user, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.redirect('/');
      });
    },

    delete(req, res) {
      let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.redirect('/');
      })
    },
  }
  
  return UserController
};