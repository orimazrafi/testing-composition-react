import { mount } from "enzyme";
import React from 'react'

// allow us to use a mock function from the ./__mocks__/ because we don't wwant to test axios we just want 
// to test that our code is working properly.
// import { functions } from "./function";
// import { fetchUser } from "./http"
// jest.mock("./axios.js");

import { act } from "react-dom/test-utils"
import { toJSON } from 'enzyme-to-json';
// jest.mock("./http");

// jest.mock("./axios.js");
jest.mock("./__fetchAuthor", () => {
    return { default: async () => Promise.resolve([{ id: 1, name: "Leanne Graham" }]) }

});
import TestAxios from './TestAxios';
test("matches snapshot", async () => {
    const React = require("react")
    // const TestAxios = require("./TestAxios").default
    let wrapper;
    await act(async () => {
        wrapper = mount(<TestAxios />);
    })
    console.log(wrapper.html())
    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot()
})