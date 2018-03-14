module.exports = (app) => {
  const { db } = app.controllers;

  app.get('/createdb', db.createDb);
  app.get('/createuserstable', db.createUsersTable);
  app.get('/adduser1', db.addUser1);
  app.get('/createcarstable', db.createCarsTable);
  app.get('/addcar1', db.addCar1);
};