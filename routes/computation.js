var express = require('express');
var router = express.Router();

// Define the endpoint for computation
router.get('/computation', function(req, res, next) {
    // Generate a random value
    var randomValue = Math.random() * 100;
    
    // Check if a query argument for 'x' is provided
    var x = req.query.x ? parseFloat(req.query.x) : randomValue;
    
    var id = 565577; 
    var lastDigit = id % 10;
    var functionName;

    if(lastDigit==7){
        functionName = Math.cos;
    }else{
        functionName=Math.abs;
    }
          
        
    
    // Apply the selected Math function to the random value or query argument
    var result = functionName(x);

    // Prepare the response string
    var response = `${functionName.name} applied to ${x} is ${result}`;

    // Send the response
    res.send(response);
});

module.exports = router;
