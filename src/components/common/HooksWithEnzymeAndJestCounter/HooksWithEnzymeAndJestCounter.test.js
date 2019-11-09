import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

//Why the import of the component is after Enzyme.configure, check if still going to work if you move it around
import HooksWithEnzymeAndJestCounter from '../HooksWithEnzymeAndJestCounter/HooksWithEnzymeAndJestCounter';
describe('HooksWithEnzymeAndJestCounter', () => {
  const onCountChange = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <HooksWithEnzymeAndJestCounter onCountChange={onCountChange} />
    );
  });

  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
});

/*Key moments - use for debugging purposes wrapper.debug()
 *1. let wrapper is over the beforeEach() cycle, so every time a test() is run, to have new instance of the component
 *2. onCountChange is over the beforeEach and is passed as prop, so every time before the test will have new mock
 *
 *
 *
 *
 **/
