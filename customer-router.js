import {express} from "express";
const router = express.Router();

router.get('/',(req,res,next)=>{
    //Code to get all customers goes here
    res.send('Here in Get all Customers');
})

router.post('/',(req,res,next)=>{
    //Code to add a customer goes here
    res.send(`Here in post for a customer ${req.body}`);
})

router.get('/:customerId',(req,res,next)=>{
    //Code to get a customer goes here
    res.send(`Here in Get a Customer with ${req.params.customerId}` );
})

module.exports = router;