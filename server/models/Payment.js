const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
  {
    name:    { type: String, trim: true },
    phone:   { type: String, trim: true },
    email:   { type: String, trim: true, lowercase: true },
    package: { type: String, trim: true },
    amount:  { type: String, trim: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Payment', paymentSchema)
