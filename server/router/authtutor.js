const { Router } = require("express");
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Tutor = require("../model/tutorSchema");
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
res.send( `Hello world from the server rotuer js`);
});

router.get('/registertutor', (req, res) => {
    res.send( `Hello world from the server rotuer js`);
    });

router.post('/registertutor', async (req, res) => {
    const { name, email, password, phone, age} = req.body;
       console.log(email);
    //    res.json({message:req.body});


    try {
      const tutorExists = await Tutor.findOne({ email: email });

      if (tutorExists) {
         return res.json({ error: "Email already Exist" });
      }

            const tutor = new Tutor({ name, email, password, phone, age });

           

            
            const tutorRegister = await tutor.save();

     if (tutorRegister) {
       
                res.json({ message: "tutor registered successfuly" });
     }


    } catch (err) {
              console. log(err);
    }

})



router.post('/logintutor', async (req, res) => {
    try
    {
    const { email, password } = req.body;

    if (!email || !password) {
            return res.json({ message: "Plz Filled the data"})
    }

    const tutorLogin = await Tutor.findOne({ email: email });

if(tutorLogin){
    const isMatch = await bcrypt.compare(password,tutorLogin.password);

  

    if(isMatch){

     res.json( {message: "tutor Signin Successfully" });
     const token = await tutorLogin.generateAuthToken();

    }else{ 
        res.json( {message: "invalid credentials" });
    }

}else{
    res.json( {message: "invalid credentials" });
}

   

   } catch (err) {
     console. log(err)}
})


// router.get('/tutordetails',authenticate,(req,res)=>{
//     res.send('hehe bwoi');
// })






module.exports = router;