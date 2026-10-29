import bcrypt from 'bcrypt'
import {prisma} from "@repo/database";
export const register = async (req,res)=>{
    const {name,email,password,salary,job_title,age,intro,join_reason,skill} = req.body;
    console.log("input ", name, password,salary,job_title,age,intro,join_reason,skill); 
    if(!name || !email || !password || !job_title || !skill) {
       return res.status(400).json({message: "missing inputs", success: "false"})
    }
    const existingUser = await prisma.user.findFirst({
        where:{
            name: name
        }
    })
    if(existingUser){
        return res.status(200).json({message: "user exists", data: existingUser, success: false})
    }
    const hashPassword = await bcrypt.hash(password,10);


      const resumeUrl = req.file
        ? `/resumes/${req.file.filename}`
        : null;
    
        const newUser = prisma.user.create({
            data:{
                name,
                password: hashPassword,
                age,
                salary,
                resume_url: resumeUrl,
                skill,
                Join_reason: join_reason,
                job_title,
                intro
            }
        });
        if(!newUser){
            return res.status(300).json({message:"user is not create", success: false})
        }

        return res.status(202).json({message: "successfull user created", data: newUser,success: true})
    

}

