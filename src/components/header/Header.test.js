import React, { Component } from "react";
import Header from "./Header";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

test("Header should render correctly", () => {
  const wrapper = Enzyme.shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
