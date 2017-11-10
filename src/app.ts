'user strict;'
import * as express from "express";
const customerRouter = require('./customer-router');


export function bootstrapServer(application:express.Application){
    application.listen(3011,()=>{
        console.log(`Express started up`);
    })
    console.log(`the here is ${customerRouter}`)
    /* Express Application Setup */
    application.use(express.json());
    
    
    //Setting the routes
    application.use('/customers',customerRouter);
}
let application:express.Application = express();
bootstrapServer(application);
