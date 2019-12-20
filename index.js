const express = require('express')
const app = express()
const port = 7000
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile("C:/Users/abhim/Desktop/newone/frontend/HTML/home.html"))
var student = {}
student.name = "Being Zero"
student.college="VNRVJIET"
student.regno="112323232"
app.get('/data', (req, res)=> res.json(student));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))