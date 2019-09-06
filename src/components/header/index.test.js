import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe("Test Header component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it("should render Header without error", () => {
        const wrapper = component.find(".header-container");
        expect(wrapper.length).toBe(1);
    });
    describe("Test Logo", () => {
        it("should render Logo", () => {
            const wrapper = component.find(".logo");
            expect(wrapper.length).toBe(1);
        });
        it("should get logo src", () => {
            const image = component.find("img");
            const logoSrc = "http://logo.com/image.png";
            expect(image.prop("src")).toBe(logoSrc);
        });
    });
});
