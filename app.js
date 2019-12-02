
const express = require('express');
const graphqlHTTP = require("express-graphql")
const schema = require('./schema/schema')


var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/library', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Welecome, Your DB is now connected');
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, () =>{
    console.log('listening for request on port 5000');
})