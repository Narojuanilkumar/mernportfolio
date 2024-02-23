const router=require('express').Router();
const {Intro,About,Project,Contact,Experience,Course}=require("../models/portfolioMOdel");
router.get("/get-portfolio-data",async(req,res)=>{
    try{
        const intros=await Intro.find();
        const abouts=await About.find();
        const projects=await Project.find();
        const contact=await Contact.find();
        const experience=await Experience.find();
        const course=await Course.find();

          res.status(200).send({
            intro:intros[0],
            about:abouts[0],
            projects:projects,
            contact:Contact[0],
            experience:experience,
          });
    }
    catch(error){
        res.status(500).send(error);

    }
});
module.exports=router;