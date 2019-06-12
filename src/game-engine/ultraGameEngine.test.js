import React, { Component } from "react";
import gameWinner from "./ultraGameEngine";
import { rules } from "./ultraGameEngine";
import toJson from "enzyme-to-json";

describe("gameWinner()", () => {
  let winner;
  let userScore = 0;
  let computerScore = 0;

  test("should increase userScore and return a success message when the user wins", () => {
    const userValue = "scissors";
    const computerValue = "rock";

    let result = gameWinner(userValue, computerValue);
    let expectedResult = {
      winner: "User won",
      userScore: 1,
      computerScore: 0
    };

    expect(result).toEqual(expectedResult);
  });

  test("should increase computerScore and return a success message when the computer wins", () => {
    const userValue = "rock";
    const computerValue = "scissors";

    let result = gameWinner(userValue, computerValue);
    let expectedResult = {
      winner: "Computer won",
      userScore: 0,
      computerScore: 1
    };

    expect(result).toEqual(expectedResult);
  });

  test("should return a draw message when it is draw", () => {
    const userValue = "rock";
    const computerValue = "rock";

    let result = gameWinner(userValue, computerValue);
    let expectedResult = {
      winner: "Draw",
      userScore: 0,
      computerScore: 0
    };

    expect(result).toEqual(expectedResult);
  });

  test("should retun a draw message before the user selects an option", () => {
    const userValue = "";
    const computerValue = "";

    let result = gameWinner(userValue, computerValue);
    let expectedResult = {
      winner: "Draw",
      userScore: 0,
      computerScore: 0
    };

    expect(result).toEqual(expectedResult);
  });
});

test("rules should have correct shape", () => {
  expect(rules).toMatchSnapshot();
});
