const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const DroneModel = require("../models/Drone.model")
// require the Drone model here

router.get('/drones',async (req, res, next) => {
   const findAllDrones = await DroneModel.find()
  console.log(findAllDrones);
  res.render("drones/list.hbs" , {findAllDrones})
});

router.get('/drones/create', (req, res, next) => {
   res.render("drones/create-form.hbs" )
   
});

router.post("/drones/create", async (req, res) => {
  console.log(req.body);
  const userCreatedDrone = new Drone({
    name : req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }); 
  await userCreatedDrone.save();
  res.redirect("/drones");
});


router.get('/drones/:id/edit', async (req, res, next) => {
  const DroneId = req.params.id;
  const drone = await DroneModel.findById(DroneId) ;
  res.render("drones/update-form", {drone})

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
