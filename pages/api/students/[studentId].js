import db from "../../../lib/dbConnect";
import Student from "../../../models/student";


export async function handler(req, res){
    if(req.method === "GET"){
        const {studentId} = req.params;


        await db.connect();
        const student = await Student.findById(studentId);
        db.discount();

        if(!student){
            res.status(404).json({message: "students not found"});
            return;
        }

        res.status(200).json({student});
    }
}