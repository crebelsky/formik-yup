import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";

it("submits", () => {
  const onSubmit = jest.fn();
  const wrapper = mount(<App onSubmit={onSubmit} />);
  wrapper.find('input[name="email"]').simulate("change", {
    target: { name: "email", value: "john.doe@test.com" }
  });
  // Crashing, test not finished
});
