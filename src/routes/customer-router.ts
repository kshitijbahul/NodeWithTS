import * as express from "express";
const customerRouter = express.Router();
import * as request from 'request';

const wallMobApi = `https://pos-etail.wallmob.com/customers`;

customerRouter.get('/',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    //Code to get all customers goes here
    //Connect to DB
    //Get All the Data for the Customer
    res.send(`Here in Get all Customers`);
})

customerRouter.post('/',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    //Code to add a customer goes here
    //res.send(`Here in post for a customer ${req.body}`);
    //Send Post request to create customer  --done
    //https://pos-etail.wallmob.com/customers
    const reqBody = req.body;
    const body = {
            name : `${reqBody.firstName} ${reqBody.lastName}`,
            email : reqBody.email,
            mobilephone : reqBody.phoneNumber
    };
    request.post(wallMobApi,{"body":body},(error,response,respBody)=>{
        error ? console.log(`Error occured ${error}`): '';
        res.send(respBody);
        //Now add to DB here 
        next();
    });
    
})

customerRouter.get('/:customerId',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    //Code to get a customer goes here
    // call DB Method to get from Database
    res.send(`Here in Get a Customer with ${req.params.customerId}` );
})

module.exports = customerRouter
