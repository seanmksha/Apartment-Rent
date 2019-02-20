const mongoose = require('mongoose');
const User = require('../models/user');
const Schema = mongoose.Schema;
const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  checkNumber:{
      type:Number,
      required: false
  }
  ,
  amount:{
      type:Number,
      required:true
  },
  roles: [{
    type: String,
  }]
}, {
  versionKey: false
});



module.exports = mongoose.model('Expense', ExpenseSchema);