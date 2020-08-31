import { Hello } from './../components/Hello/Hello';
import React from 'react'

import { mount } from "enzyme";
test("hello", () => {
    const name = "Ori"
    const wrapper = mount(<Hello name={name} />)
    expect(wrapper.text()).toMatch(`Hello, ${name}`)
})