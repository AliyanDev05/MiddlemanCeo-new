const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    phone:   { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    source:  { type: String, trim: true },
    package: { type: String, trim: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Lead', leadSchema)
