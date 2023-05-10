const express = require ('express');
const dotenv = require ('dotenv');
const { default: mongoose } = require('mongoose');
const app = express();
 

dotenv.config({path:'./.env'});
require('./db/connection');
app.use(express.json());

app.use(require('./router/auth')); 
app.use(require('./router/authtutor')); 
app.use(require('./router/authadmin'));
// app.use(require('./router/assignments'));


// const User = require('./model/userSchema');

const PORT = process.env.PORT;



app.get('/', (req, res) => {
res.send( "Hello world from the server");
});

app.get('/register', (req, res) => {
    res.send( "Hello world from the server");
    });
    

app.listen(PORT,()=>{
console.log(`waah modi ji waah server is running at port no ${PORT}`);
});