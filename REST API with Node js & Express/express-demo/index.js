const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

//routes
app.get('/',(req,res)=> {
    res.send('Hello World!');
});

app.get('/api/course',(req,res)=>{
    res.send([1,2,3]);
});

//reading parameters
app.get('/api/course/:year/:month/:day', (req,res) => {
    res.send(req.params);
    console.log(req.params.year);
    
});

// reading query  parameters

app.get('/api/course/:year', (req, res) => {
    res.send(req.query);
});

//return course list
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// return only particular id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find( c => c.id ===  parseInt(req.params.id));
    if(!course) return res.status(404).send('course with the given id is not found.');
    res.send(course);
});


// handlling post request 

app.post('/api/coursesp', (req, res) => {
    const co = {
        id : courses.length + 1,
        name: req.body.name
    }
    courses.push(co);
    res.send(co);
});

// input validation

app.post('/api/coursesv', (req, res) => {


    // manual validation
    if (!req.body.name  || req.body.name.length < 3) {
        res.status(400).send('Name is required and minimum 3 characters needed');
        return;
    }
    const co = {
        id : courses.length + 1,
        name: req.body.name
    }
    courses.push(co);
    res.send(co);
});

// handlling put request 

app.put('/api/courses/:id', (req, res) => {
    const coo = courses.find(c => c.id === parseInt(req.params.id));
    if(!coo) return res.status(404).send('Course with given ID is not found');
    if (!req.body.name  || req.body.name.length < 3) {
        res.status(400).send('Name is required and minimum 3 characters needed');
        return;
    }
    coo.name = req.body.name;
    res.send(coo); 

});

// handlling delete request

app.delete('/api/courses/:id', (req,res) => {
    const cood = courses.find(c => c.id === parseInt(req.params.id));
    if(!cood) return res.status(404).send('Course with given ID is not found');
    if (!req.body.name  || req.body.name.length < 3) {
        res.status(400).send('Name is required and minimum 3 characters needed');
        return;
    }
    const index = courses.indexOf(cood);
    courses.splice(index,1);
    res.send(cood);


});



// app.listen(3000, () => console.log('Listening at port 3000...'));

const port  = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));