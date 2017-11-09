'user strict;'
import {express} from "express";
import {customerRouter} from "./customer-router";
//import {bodyParser} from "body-parser";

const app=express();
//Getting the Express router to be able to user router.get() directly inplace of 
const router= express.Router();

app.listen(3010,()=>{
    console.log(`Express started up`);
})

/* Express Application Setup */
app.use(express.json);


//Setting the routes
app.use('/customers',customerRouter);
