const express = require('express');
const router = express.Router();
const Menu = require('./../models/menu');

//POST method for Menu

router.post('/', async (req, res) => {
    try{
        const data = req.body 
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

//GET method to get the Menu items
router.get('/',async (req,res)=>{
    try{

        const data = await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/:taste',async (req,res)=>{
    try{
        const taste = req.params.taste;  
        if(taste == 'sweet' || taste == 'spicy' || taste == 'sour'){
            const response = await Menu.find({taste:taste});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid work type'});
        }
    
       }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server error'});
       }
})

  
router.delete('/:id',async (req,res)=>{
    try{
        const dishId = req.params.id;

        const response = await Menu.findByIdAndDelete(dishId);

        if(!response){
            return res.status(404).json({error:'Dish not found'});
        }

        console.log("Data Updated");
        res.status(200).json({message:'Deleted Successfully'})
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})


module.exports = router;