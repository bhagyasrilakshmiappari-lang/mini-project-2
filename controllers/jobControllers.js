const Job = require("../models/Job");


// Add Job
exports.addJob = async(req,res)=>{
    try{

        const {title, company, location} = req.body;

        const job = await Job.create({
            title,
            company,
            location
        });

        res.status(201).json({
            message:"Job Added",
            job
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}


// Get All Jobs
exports.getJobs = async(req,res)=>{
    try{

        const jobs = await Job.find();

        res.json(jobs);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}