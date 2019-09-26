import React from "react";
import { shallow } from "enzyme";
import NavBar from "./index";

const setUp = (props = {}) => {
  const component = shallow(<NavBar {...props} />);
  return component;
};

describe("Test NavBar component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render NavBar without error", () => {
    const wrapper = component.find(".navbar--block-container");
    expect(wrapper.length).toBe(1);
  });
});
