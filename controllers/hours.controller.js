// hours.controller.js

const express = require("express");
const Hours = require("../models/hours");

// Create the `HoursController` controller
class HoursController {
  // Create a new `Hours` object
  async create(req, res) {
    // Create a new `Hours` object
    const hours = new Hours({
      name: req.body.name,
      hours: req.body.hours,
      date: new Date(),
    });

    // Save the `Hours` object to the database
    try {
      await hours.save();
      res.status(201).json(hours);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Get all the `Hours` objects from the database
  async get(req, res) {
    // Get all the `Hours` objects from the database
    const hours = await Hours.find();

    // Send the `Hours` objects to the client
    res.status(200).json(hours);
  }

  // Get the `Hours` object with the specified ID from the database
  async getById(req, res) {
    // Get the `Hours` object with the specified ID from the database
    const hours = await Hours.findById(req.params.id);

    // Send the `Hours` object to the client
    res.status(200).json(hours);
  }

  // Update the `Hours` object with the data from the request body
  async update(req, res) {
    // Get the `Hours` object with the specified ID from the database
    const hours = await Hours.findById(req.params.id);

    // Update the `Hours` object with the data from the request body
    hours.name = req.body.name;
    hours.hours = req.body.hours;
    hours.date = new Date();

    // Save the `Hours` object to the database
    try {
      await hours.save();
      res.status(200).json(hours);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Delete the `Hours` object from the database
  async delete(req, res) {
    // Get the `Hours` object with the specified ID from the database
    const hours = await Hours.findById(req.params.id);

    // Delete the `Hours` object from the database
    await hours.remove();

    // Send a success message to the client
    res.status(200).json("Hours object deleted successfully");
  }
}

// Export the `HoursController` controller
module.exports = new HoursController();
