import React, { Component } from "react";
import UserScreen from "./UserScreen";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

test("UserScreen should render correctly", () => {
  const wrapper = Enzyme.shallow(<UserScreen />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
