const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Expense = require('../models/expense');
const jwt = require('jsonwebtoken');
router.get('/expense',function(req,res,next){
    var decoded = jwt.decode(req.query.token);
});

router.patch('/expense/:id',function(req,res,next){

});

router.delete('/expense/:id',function(req,res,next){

});

module.exports = router;