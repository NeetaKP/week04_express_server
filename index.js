// create the app
const express = require('express');   
const app = express();
const SERVER_PORT = 3000;

app.get ('/', (req, res)=>{
    res.send('<h1>Hello world</h1>');
});

app.get('/about', (req, res)=>{
    res.send('<h1>About Us</h1>');
})

app.get('/contact' , (req, res)=>{
    res.send('<h1>Contact Us</h1>');
});


app.post('/hello', (req, res)=>{
    res.send('<h1>Post:Hello World</h1>')
});

// app.all('/hello', (req, res)=>{  //a any operation 
//     res.status(203)
//     res.send('<h1>All:Hello World</h1>')
// });

app.put('/hello', (req, res)=>{
    res.status(203)
    res.send('<h1>Put:Hello World</h1>')
});


app.delete('/hello', (req, res)=>{ // 204 staus code will not send any content 
    res.status(204)
    res.send('<h1>Delete:Hello World</h1>')
});

app.get('/student', (req, res)=>{
    res.status(200)
        const stud = {
            name: 'John Doe',
            age: 25,
        }
        res.json(stud); // jsson object created
    
});
// we can send by using path parameter
//(most popular controlled one) or query parameter (not contorlled)
//eg http://localhost:3000/student/neeta/pant/toronto  (here we are
// passing fN, lN and city is the path parameter)
//http://localhost:3000/student?fN=Neeta&lN=pant(query parameter it has ? )

// eg query string parameter
//http://localhost:3000/employee?fnm=pritesh&lnm=patel

app.get('/employee',(req, res)=>{
    console.log(req.query)
    const fnm = req.query.fnm
    const lnm = req.query.lnm;
    res.send(`First Name : ${fnm}, Last Name: ${lnm}`);
});

// eg of define in path parameter
//http://localhost:3000/employee/neeta/pant/toronto
app.get('/employee/:fnm/:lnm/:city', (req, res)=>{
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const city = req.params.city;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}, City:${city}`)
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is runnung on http://localhost:${SERVER_PORT}`);
});
