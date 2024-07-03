const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const EmployeeModel = require('./models/Employees');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/employees');

app.get('/', (req, res) => {
    res.send('Be happy your runnig well')
})

app.post('/login', (req, res) => {
    // res.send('login runnning well')

    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('success');
                } else {
                    res.json('the password is incorrect');
                }
            } else {
                res.json('No record existed');
            }
        })
        .catch(err => res.json(err));
});

app.post('/register', (req, res) => {
    // res.send('login runnning well')
    console.log('req:===>>', req);
    console.log('req.body:===>>', req.body);
    EmployeeModel.create(req.body).then(employee => res.json(employee)).catch(err => res.json(err))
})


const port = 3001;
app.listen(port, () => {
    console.log('running well');
})