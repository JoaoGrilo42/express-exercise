const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(express.json());

const studentRec = JSON.parse(fs.readFileSync('grades.json'));

router.get('/:studentId', (req, res) => {
    stud = studentRec.find((student)=>{
        return student.id === Number(req.params.studentId)})
    res.send(stud)
})

router.post('/', (req, res)=>{
    console.log(req.body)
    if(req.body.studentID == undefined || 
        req.body.class == undefined ||
         req.body.grade == undefined){
             res.send("Invalid Post")
         }
         else{
             res.send("StudentID: " +
             req.body.studentID + " now has a grade of " +
             req.body.grade + " in " +req.body.class);
         }
})

module.exports = router