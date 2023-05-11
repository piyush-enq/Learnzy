const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const Assign = require("../model/AssignUploadSchema");
// const Comment = require("../models/comment");

const router = Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.resolve(`./public/uploads/`));
//   },
//   filename: function (req, file, cb) {
//     const fileName = `${Date.now()}-${file.originalname}`;
//     cb(null, fileName);
//   },
// });

// const upload = multer({ storage: storage });

// router.get("/add-new", (req, res) => {
//   return res.render("addAssign", {
//     user: req.user,
//   });
// });

router.post('/assign', async (req, res) => {
    const { subject,topic,body} = req.body;
       console.log(subject);
    //    res.json({message:req.body});


    try {
      
            const assign = new Assign({ subject,topic,body });
            const assignUpload = await assign.save();

     if (assignUpload) {
       
                res.json({ message: "Assignment added successfuly" });
                
     }


    } catch (err) {
              console. log(err);
    }

})

// router.get("/:id", async (req, res) => {
//   const assign = await Assign.findById(req.params.id).populate("createdBy");
// //   const comments = await Comment.find({ blogId: req.params.id }).populate(
// //     "createdBy"
// //   );

//   return res.render("assign", {
//     // user: req.user,
//     assign,
//     // comments,
//   });
// });

// // router.post("/comment/:blogId", async (req, res) => {
// //   await Comment.create({
// //     content: req.body.content,
// //     blogId: req.params.blogId,
// //     createdBy: req.user._id,
// //   });
// //   return res.redirect(`/blog/${req.params.blogId}`);
// // });
// // subject, topic, body
// router.post("/", upload.single("fileUrl"), async (req, res) => {
//   const { subject,topic,body } = req.body;
//   const assign = await Assign.create({
//     subject,
//     topic,
//     body,
//     // title,
//     // createdBy: req.user._id,
//     fileUrl: `/uploads/${req.file.filename}`,
//   });
//   return res.redirect(`/assign/${assign._id}`);
// });

module.exports = router;
