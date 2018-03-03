import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";

it("submits when email is correct", done => {
  const onSubmit = jest.fn();
  const wrapper = mount(<App onSubmit={onSubmit} />);

  wrapper.find('input[name="email"]').simulate("change", {
    persist: jest.fn(),
    target: { name: "email", value: "john.doe@test.com" }
  });
  wrapper.find("button").simulate("submit");

  setTimeout(() => {
    expect(onSubmit).toBeCalled();
    done();
  }, 0);
});
it("doesn't submit when email is incorrect", done => {
  const onSubmit = jest.fn();
  const wrapper = mount(<App onSubmit={onSubmit} />);

  wrapper.find('input[name="email"]').simulate("change", {
    persist: jest.fn(),
    target: { name: "email", value: "john.doe.test.com" }
  });
  wrapper.find("button").simulate("submit");

  setTimeout(() => {
    expect(onSubmit).not.toBeCalled();
    done();
  }, 0);
});
