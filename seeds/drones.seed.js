// Iteration #1
require("../db")
const drone = require("../models/Drone.model")
const mongoose = require("mongoose");

const Drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  async function main(){
      try{
          await Drone.create(drones)
          console.log("the process succeed")
      }
      catch(err){
          console.log("it does not work", err)
      }
      finally{
        mongoose.connection.close();
      }
  }
  main();