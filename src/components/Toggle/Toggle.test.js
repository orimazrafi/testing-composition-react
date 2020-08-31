import React from 'react'
import { shallow } from "enzyme";
import { Toggle } from './Toggle';
import toJSON from "enzyme-to-json"
describe('Toggle', () => {
    it('should show text', () => {
        const wrapper = shallow(<Toggle />)
        const text = wrapper.find('[data-test="toggled-element"]');
        expect(text.text()).toBe("Text To Show!")
    });
    it('should hide text when button is clicked', () => {
        const wrapper = shallow(<Toggle />)
        const button = wrapper.find('[data-test="toggle-btn"]');
        button.simulate('click');
        const text = wrapper.find('[data-test="toggled-element"]');
        expect(text.length).toBe(0)
    })
})
describe('Increment', () => {
    it('should increment number when clicking the button.', () => {
        const wrapper = shallow(<Toggle />)
        const button = wrapper.find('[data-test="increment-btn"]');
        button.simulate("click");
        const text = wrapper.find('[data-test="number"]')
        expect(text.text()).toBe("1")
    });
    it('number should start with 0 value.', () => {
        const wrapper = shallow(<Toggle />)
        const text = wrapper.find('[data-test="number"]')
        expect(text.text()).toBe("0")
    });
    it('should hide text when button is clicked', () => {
        const wrapper = shallow(<Toggle />)
        const button = wrapper.find('[data-test="toggle-btn"]');
        button.simulate('click');
        const text = wrapper.find('[data-test="toggled-element"]');
        expect(text.length).toBe(0)
    })
})
describe("toggle snapshoot", () => {
    it('the snapshoot should not be change', () => {
        const wrapper = shallow(<Toggle />)
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
})