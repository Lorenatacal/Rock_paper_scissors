import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
// import randomOptions from "../utils/randomOptions.js";
//import MockAdapter from "axios-mock-adapter";

Enzyme.configure({ adapter: new Adapter() });
// jest.mock("../utils/randomOptions.js");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("App should render correctlyt", () => {
  const wrapper = Enzyme.shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
test("App should render correctly on handleClick", () => {
  const wrapper = Enzyme.shallow(<App />);
  const e = {
    target: {
      name: "scissors"
    }
  };
  const userValue = "scissors";
  // randomOptions.mockReturnValue("paper");
  // const computerValue = randomOptions();

  wrapper.instance().handleClick(e);

  expect(wrapper.state().userValue).toEqual("scissors");
  expect(toJson(wrapper)).toMatchSnapshot();
});
