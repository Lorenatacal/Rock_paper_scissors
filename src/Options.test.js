import React, { Component } from "react";
import Options from "./Options";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

test("Options should render correctly", () => {
  const wrapper = Enzyme.shallow(<Options />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
