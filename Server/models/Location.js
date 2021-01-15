const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    location: {
        type: {
          type: String, 
          enum: ['Point'], 
          required: true
        },
        coordinates: {
          type: [Number],
          required: true,
          index: '2dsphere'
        }
      }
  });