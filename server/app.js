const express = require ('express');
const dotenv = require ('dotenv');
const cookieParser = require('cookie-parser')
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cookieParser());
 

dotenv.config({path:'./.env'});
require('./db/connection');
app.use(express.json());

app.use(require('./router/auth')); 
app.use(require('./router/authtutor')); 
app.use(require('./router/authadmin'));
app.use(require('./router/assignments'));


// const User = require('./model/userSchema');

const PORT = process.env.PORT;



app.get('/also', (req, res) => {
   
    res.cookie(`Cookie token name`,`encrypted cookie string Value`);
    res.send('Cookie have been saved successfully');
});

app.get('/register', (req, res) => {
    res.send( "Hello world from the server");
    });


    // get route to get a list of all data
    app.get('/list', async (req, res) => {
        try {
            // Get the list of tutors waiting for approval from temporary storage
            const tutors = await Tutor.find({}).exec()
            res.status(200).json(tutors)
        }
        catch (err) {
            console.error(err)
            res.status(500).json({ message: 'Internal server error' })
        }
    })

app.listen(PORT,()=>{
console.log(`waah modi ji waah server is running at port no ${PORT}`);
});