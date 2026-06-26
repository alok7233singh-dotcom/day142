const express = require("express")

const app = express();

let students =[
    {id: 1, name: "alok singh", city: "gkp" },
    {id: 2, name: "gaurav yadav", city: "sahjnwa"},
];

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("api is running");
});

app.get("/students",(req,res)=>{
    res.json({
        message:"all students",
        data:students
    })
});

app.post("/students",(req,res)=>{
    const { id,name,city} = req.body;
    const newStudent = { id,name,city };
    students.push(newStudent);
    res.json({
        message:"record added",
        student:newStudent,
        data:students
    })
});

app.listen(3000,()=>{
    console.log("server started");
});