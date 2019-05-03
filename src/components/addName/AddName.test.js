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
test("AddName should render correctly onSubmit", () => {
  const wrapper = Enzyme.shallow(<AddName />);
  const submitButton = wrapper.find('[data-name="SubmitButton"]');
  submitButton.simulate("click");
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(wrapper.state("showMessage")).toEqual(true);
  expect(wrapper.state("showInput")).toEqual(false);
});
