var express = require('express');
var router = express.Router();
 
/* GET computation page. */
router.get('/', function(req, res) {
  // Check if there is a query parameter 'x' in the request
  const x = req.query.x;
 
  if (x !== undefined) {
    // If 'x' is provided in the query, parse it to a float and calculate the tangent
    const xFloat = parseFloat(x);
    const result = Math.tan(xFloat);
    res.send(`Math.tan() applied to ${xFloat} is ${result}`);
  } else {
    // If 'x' is not provided, generate a random value and calculate the tangent
    const randomX = Math.random() * 10;
    const result = Math.tan(randomX);
    res.send(`Math.tan() applied to a random value ${randomX} is ${result}`);
  }
});
 
module.exports = router;

