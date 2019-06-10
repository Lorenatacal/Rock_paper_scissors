import React, { Component } from "react";
import gameWinner from "./ultraGameEngine";
import { rules } from "./ultraGameEngine";
import toJson from "enzyme-to-json";

test("gameWinner() should retun 1 if we pass 'scissorsrock' as argument", () => {
  expect(gameWinner("scissorsrock")).toEqual(1);
});
test("gameWinner() should return -1 if we pass 'rockscissors' as argument", () => {
  expect(gameWinner("rockscissors")).toEqual(-1);
});
test("gameWinner() should return 0 if we pass 'rockrock' as argument", () => {
  expect(gameWinner("rockrock")).toEqual(0);
});
test("rules to have correct shape", () => {
  expect(rules).toMatchSnapshot();
});
