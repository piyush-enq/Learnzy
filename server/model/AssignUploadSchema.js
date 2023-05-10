// //Schema for creating db  
// subject, topic, body

// const { Schema, model } = require("mongoose");

const { default: mongoose } = require('mongoose');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AssignUploadSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    topic: {
        type: String,
        required: true,
      },
    body: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: false,
    },
    tokens:[
        {
            token:{
                type:String,
            }
        }
    ],
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },

  { timestamps: true }

);


adminSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);

        this.tokens=this.tokens.concat({token:token});

        await this.save();
        return token;
    } catch{

       console.log("error");
    }
}

// const Blog = model("blog", blogSchema);

// module.exports = Blog;





const Assignments = mongoose.model('assignments', AssignUploadSchema);
module.exports = Assignments;
