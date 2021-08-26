var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const userRoute = require('./api/routes/user-route')

const server = app.listen(port, () => {
    console.log('App corriendo en el puerto ' + port);
});


app.get("/test", (req, res) => {
    res.json("Funciona!");
});

app.use('/api/user', userRoute);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
module.exports = server;