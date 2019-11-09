import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

//Why the import of the component is after Enzyme.configure, check if still going to work if you move it around
import HooksWithEnzymeAndJestCounter from '../HooksWithEnzymeAndJestCounter/HooksWithEnzymeAndJestCounter';
describe('HooksWithEnzymeAndJestCounter', () => {
  let onCountChange;
  let wrapper;
  beforeEach(() => {
    onCountChange = jest.fn();
    wrapper = mount(
      <HooksWithEnzymeAndJestCounter onCountChange={onCountChange} />
    );
  });

  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });

  test('show my default text', () => {
    expect(wrapper.find('p').text()).toBe('Count: 0');
  });

  test('on click the result should be increased by 1, and should be 1', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toBe('Count: 1');
  });

  test('on 4 clicks the result should be increased by 4 and should be 4', () => {
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toBe('Count: 4');
  });
});

// Basic example
/*Key moments - use for debugging purposes -> wrapper.debug() -> This will display the whole Component rendered
 *1. The declaration of the let wrapper is over the beforeEach() cycle, so can have global object and in the same time when every test() is run, to have new instance of the component in this wrapper
 *2. onCountChange is over the beforeEach and is passed as prop to the component, so every time before test() was run,  the test will have a new mock
 *3. wrapper.find(html selector) -the find() (check https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html) function is coming from enzyme, and text() (check https://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html) function is coming from enzyme
 *4. then we using the asserts(expects) that coming from Jest ( check https://jestjs.io/docs/en/expect )
 *5. Then just develop your logic needed for your component to work properly
 **/

// Example with hooks
describe('HooksWithEnzymeAndJestCounter with hooks', () => {
  let wrapper;
  let onCountChange;

  beforeEach(() => {
    onCountChange = jest.fn();
    wrapper = mount(
      <HooksWithEnzymeAndJestCounter onCountChange={onCountChange} />
    );
  });

  test('useEffect() is called once and onCountChange is called once', () => {
    expect(onCountChange).toBeCalledTimes(1);
  });

  test('useEffect() is called twice after button click and onCountChange is also called twise', async () => {
    await expect(onCountChange).toBeCalledTimes(1);
    await wrapper.find('button').simulate('click');
    await expect(onCountChange).toBeCalledTimes(2);
  });
});

// Example with hooks
/*Key moments:
 *1. Remember we already mock onCountChange that is called from useEffect() hook,now we can see many times
 * this useEffect() is called when we check how many times the mock function is called
 **/
