import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

it("submits", () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<App onSubmit={onSubmit} />);
  const form = wrapper.find("Formik").dive();
  form.find('input[name="email"]').simulate("change", {
    persist: jest.fn(),
    target: { name: "email", value: "john.doe@test.com" }
  });
  form.find("button").simulate("submit");

  expect(onSubmit).toBeCalled();
});
