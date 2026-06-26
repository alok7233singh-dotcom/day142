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
//data store

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

// data update
app.put("/students/:id",(req,res)=>{
    //const id =req.param.id;
    const{id} =req.params;
    const student = students.find(s => s.id ==id);
    //if student found = value...
    if(!student)
    {
        return res.status(404).json({
            message:"student not found"
        });
    }
    student.name = req.body.name;
    student.city = req.body.city;

    res.json({
        message:"record updated",
        student
    });
});

app.delete("/students/:id",(req,res) =>{
    const id = req.params.id;
    const student = students.find(s => s.id == id);
    if(!student){
        return res.status(404).json({
            message:"invaild id"
        });
    }
    students = students.filter(s => s.id !=id);
    res.json({
        message:"record deleted",
        students
    })
});

app.listen(3000,()=>{
    console.log("server started");
});