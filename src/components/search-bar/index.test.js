import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./index";

const setUp = (props = {}) => {
    const component = shallow(<SearchBar {...props} />);
    return component;
};

describe("Test SearchBar component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it("should render SearchBar without error", () => {
        const wrapper = component.find(".searchbar-container");
        expect(wrapper.length).toBe(1);
    });
    it("should get input value from state keyword", () => {
        const wrapper = component.find("input");
        wrapper.simulate("change", {
            target: {
                value: "hello"
            }
        });
        expect(component.state("keyword")).toBe("hello");
    });
});
