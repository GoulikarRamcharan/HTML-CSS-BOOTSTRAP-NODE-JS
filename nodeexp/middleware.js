const express = require('express');
const app = express();

const { add,  mul } = require('./opeartion');


const loggerMiddleware = (req, res, next) => {
    console.log("hi buddy");
    next();
}

app.use(loggerMiddleware);


app.get('/app',
    (req, res, next) => {
       
        req.sum = add(3, 4);
        next();
    },
    (req, res, next) => {
      
        req.product = mul(2, 3);
        next();
    },
    (req, res) => {
         res.send(`The result of add and mul is ${req.sum} and ${req.product}`);
    }
);


app.listen(3000, () => {
    console.log("Listening to the 3000.")
})