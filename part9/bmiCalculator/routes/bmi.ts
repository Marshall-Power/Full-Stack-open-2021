import express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
   // Access the provided 'weight' and 'height' query parameters
    const weight = Number(req.query.weight),
          height = Number(req.query.height);
        
    const bmiInNumber = weight / ((height/100) * (height/100));
    let bmi;

    if (bmiInNumber < 18.5) {
      bmi = 'Underweight';
    } else if (bmiInNumber < 25) {
        bmi = 'Normal (healthy weight)';
    } else if (bmiInNumber < 30) {
        bmi = 'Overweight';
    } else {
        bmi = 'Obese';
  }

    
 if(!isNaN(height) && !isNaN(weight)){
  res.send({
    weight,
    height,
    bmiInNumber,
    bmi
  });
 } else {
   res.send({
     error: "malformatted parameters"
   });
 }
});

export default router;