import React from "react";
import { shallow } from "enzyme";
import NavBarBottom from "./index";

const setUp = (props = {}) => {
  const component = shallow(<NavBarBottom {...props} />);
  return component;
};

describe("Test NavBarBottom component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render NavBarBottom without error", () => {
    const wrapper = component.find(".bottomnavbar--block-container");
    expect(wrapper.length).toBe(1);
  });
});
