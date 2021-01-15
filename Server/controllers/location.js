const Location = require("../models/Location");
const geocoder = require('../utils/geocoder');
const asyncHandler = require("../middleware/async");
const geolib = require('geolib');

// @desc    Accept default location by ADMIN
// @route   POST /api/v1/location/city/:city [DELHI, IN]
// @access  Public
exports.location = asyncHandler(async (req, res, next) => {

    const { city } = req.params;
    const geoLocation = await geocoder.geocode(city);

    const cityLocation = {
        type: 'Point',
        coordinates: [geoLocation[0].longitude, geoLocation[0].latitude]
    }
    
    await Location.create({ location: cityLocation });

    res.status(201).json({
        success: true
    });
});

// @desc    Get distance by Co-ordinates by USER
// @route   GET /api/v1/location/city/:city 
// @access  Private
exports.getConfirmationIfInRadius = asyncHandler(async (req, res, next) => {
    const { city } = req.params;
    
    // User's Location
    const geoLocation = await geocoder.geocode(city);  
    const receivedLat = geoLocation[0].latitude;
    const receivedLng = geoLocation[0].longitude;

    // Default Location
    const defaultLocation = await Location.findOne();
    const defaultLat = defaultLocation.location.coordinates[1];
    const defaultLng = defaultLocation.location.coordinates[0];

    // Calculate Distance
    const distance = geolib.getPreciseDistance(
        {latitude: receivedLat, longitude: receivedLng},
        {latitude: defaultLat, longitude: defaultLng},
        1
    )/ 1000 < 100 ? 'Yes' : 'No';
    
    res.status(200).json({
          success: true,
          distance: distance
    })    
})