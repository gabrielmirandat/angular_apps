module.exports = (app) => {
  const { car } = app.controllers;

  app.get('/cars', car.getAll);
  app.get('/cars/:id', car.get);
  app.post('/cars', car.add);
  app.put('/cars/:id', car.update);
  app.delete('/cars/:id', car.delete);
};
