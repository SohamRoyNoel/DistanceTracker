const Location = require("../models/Location");
const geocoder = require('../utils/geocoder');
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Accept default location by admin
// @route   POST /api/v1/location/city/:city
// @access  Public
exports.location = asyncHandler(async (req, res, next) => {

    const { city } = req.params;
    const location = await geocoder.geocode(city);
    console.log(JSON.stringify(location));

    // const location = await Location.create({
        
    // });

    // res.status(201).json({
    //     success: true
    // })
});

// @desc    Get distance by Co-ordinates
// @route   GET /api/v1/location/:latitude/:longitude
// @access  Private
// exports.getBootcampsInRadious = asyncHandler(async (req, res, next) => {
//     const { zipcode, distance } = req.params;
    
//     const loc = await geocoder.geocode(zipcode);   
//     const lat = loc[0].latitude;
//     const lng = loc[0].longitude;

//     // calculate radius 
//     const radius = distance / 6378; // Radius will be counted in KM
//     const bootcamps = await Bootcamp.find({
//           location: { $geoWithin: { $centerSphere: [ [ lng, lat ], radius ] } }
//     });
    
//     res.status(200).json({
//           success: true,
//           count: bootcamps.length,
//           data: bootcamps
//     })    
// })