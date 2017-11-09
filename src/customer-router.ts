import * as express from "express";
const customerRouter = express.Router();

customerRouter.get('/',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    //Code to get all customers goes here
    res.send(`Here in Get all Customers`);
})

customerRouter.post('/',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    //Code to add a customer goes here
    res.send(`Here in post for a customer ${req.body}`);
})

customerRouter.get('/:customerId',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    //Code to get a customer goes here
    res.send(`Here in Get a Customer with ${req.params.customerId}` );
})

module.exports = customerRouter
