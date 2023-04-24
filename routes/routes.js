// routes.js

const express = require("express");
const HoursController = require("../controllers/hours");

// Create the `HoursRoutes` router
const HoursRoutes = express.Router();

// Add the `HoursController` controller to the `HoursRoutes` router
HoursRoutes.post("/", HoursController.create);
HoursRoutes.get("/", HoursController.get);
HoursRoutes.get("/:id", HoursController.getById);
HoursRoutes.put("/:id", HoursController.update);
HoursRoutes.delete("/:id", HoursController.delete);

// Export the `HoursRoutes` router
module.exports = HoursRoutes;
