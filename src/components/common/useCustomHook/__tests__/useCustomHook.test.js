import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { act } from 'react-dom/test-utils';

import useCustomHook from '../useCustomHook';

describe('useCustomHook()', () => {
  test('it works', () => {
    let results;
    const HookWrapper = () => {
      results = useCustomHook();
      return null;
    };
    mount(<HookWrapper />);
    expect(results.count).toEqual(0);
  });
});

// Custom hook example without helper function
/*Key moments
 *1. The declaration of the let result is over the HookWrapper() which is a component wrapper so the rule of hooks to be followed: Hooks need to be called inside component, and we return null, since every component should return null, html or component
 *2. onCountChange is over the beforeEach and is passed as prop to the component, so every time before test() was run, the onCountChange will have a new mock
 **/

// Custom hook example with helper function
describe('useCustomHook()', () => {
  let results;
  const renderHook = hook => {
    const HookWrapper = () => {
      results = hook();
      return null;
    };
    mount(<HookWrapper />);
    return results;
  };
  test('the result from useCustom hook should be 0 by default, then after increment should be 1', () => {
    renderHook(useCustomHook);
    expect(results.count).toEqual(0);

    act(() => {
      results.increment();
    });

    expect(results.count).toEqual(1);
  });
});

// Custom hook example without helper function
/*Key moments
 *1. We moving our code in custom function that we can reuse, it accept hook, and inside we have one more 
 time the HookWrapper component that is mount after that, and we return the results from our custom hook(in the example is hook())
 *2. When we checking if the count is the correct result everything is working, but if we causing state update we should use act
 import { act } from 'react-dom/test-utils'; and wrap the function that is causing state update in this case results.increment();
 **/
