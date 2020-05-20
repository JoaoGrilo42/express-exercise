const express = require('express');
const app = express();

const students = require('./routes/student')
const grades = require('./routes/grades')

app.use(express.json())
app.use('/students', students)
app.use('/grades', grades)
app.get('/',(req, res)=>res.send("What a hoopy frood"))

app.listen(8080, () => console.log('Listening at http://localhost:8080'))