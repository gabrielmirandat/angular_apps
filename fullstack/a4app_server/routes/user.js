module.exports = (app) => {
  const { user } = app.controllers;

  app.get('/users', user.getAll);
  app.get('/users/:id', user.get);
  app.post('/users', user.add);
  app.put('/users/:id', user.update);
  app.delete('/users/:id', user.delete);
};
