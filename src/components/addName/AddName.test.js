import React, { Component } from "react";
import AddName from "./AddName";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

test("AddName should render correctly without submit", () => {
  const wrapper = Enzyme.shallow(<AddName />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
