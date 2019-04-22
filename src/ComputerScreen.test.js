import React, { Component } from "react";
import ComputerScreen from "./ComputerScreen";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

test("ComputerScreen should render correctly", () => {
  const wrapper = Enzyme.shallow(<ComputerScreen />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
