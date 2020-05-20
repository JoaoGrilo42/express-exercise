const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(express.json());

const studentRec = JSON.parse(fs.readFileSync('student.json'));

router.get('/', (req, res)=>{
    students = studentRec.filter((stud) => {
        if(req.query.search !== undefined){
            console.log(stud.name === req.query.search)
            console.log(typeof(stud.name))
            console.log(typeof(req.query.search))
            return stud.name == req.query.search
        }
        else{
            return true
        }
    })
    res.send(students)
});

router.get('/:studentId', (req, res) => {
    stud = studentRec.find((student)=>{
        return student.id === Number(req.params.studentId)})
    res.send(stud)
})

router.post('/', (req, res)=>{
    if(req.body.name == undefined){
             res.send("Invalid Post")
         }
         else{
             res.send("Student: " + req.body.name + 
             " has been created.");
         }
})
module.exports = router;