module.exports = (app) => {
  const db = require('../libs/db_conn.js');

  const CarController = {

    getAll(req, res) {
      let sql = 'SELECT * FROM cars';
      let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send({data: results});
      })
    },

    get(req, res) {
      let sql = `SELECT * FROM cars WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({data: result});
      })
    },

    add(req, res) {
      let data = req.body;
      let sql = 'INSERT INTO cars SET ?';
      let query = db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send({data: result.insertId});
      });
    },

    update(req, res) {
      let data = req.body;
      let sql = `UPDATE cars SET ? WHERE id = ${req.params.id}`;
      let query = db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send({data: "Atualizado com sucesso!"});
      });
    },

    delete(req, res) {
      let sql = `DELETE FROM cars WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send({data: "Deletado com sucesso!"});
      })
    }
  }
  return CarController
};    