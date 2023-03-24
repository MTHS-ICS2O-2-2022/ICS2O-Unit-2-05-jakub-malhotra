// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates pay and income tax based on hourly wage and hours worked
 */
function enterClicked() {
  //input
  const hours = parseInt(document.getElementById("hours-worked").value)
  const wage = parseInt(document.getElementById("hourly-wage").value)

  //process
  const takeHomeSalary = hours * wage * (1.0 - 0.18)
  const INCOMETAX = hours * wage * 0.18

  //output
  document.getElementById("pay").innerHTML =
    "You will receive: $" + takeHomeSalary.toFixed(2)
  document.getElementById("income-tax").innerHTML =
    "The government will tax: $" + INCOMETAX.toFixed(2)
}