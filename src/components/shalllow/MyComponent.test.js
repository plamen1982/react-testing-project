import { mount, shallow, render } from 'enzyme';
import MyComponent from './MyComponent';
import React from 'react';

describe('shollow rendering | <MyComponent> shallow rendering', () => {
  test('shallow |<MyComponent />', () => {
    const strings = ['first', 'second'];
    const component = shallow(<MyComponent strings={strings} />);
    expect(component).toMatchSnapshot();
  });
});

describe('shallow rendering with disappear| <MyComponent> mount rendering', () => {
  test('shallow |<MyComponent /> should click the button', () => {
    const strings = ['first', 'second'];
    let isHidden = true;
    const handleClick = jest.fn();
    const component = shallow(
      <MyComponent
        strings={strings}
        isHidden={isHidden}
        handleClick={handleClick}
      />
    );
    component.find('button#my-button-one').simulate('click');
    expect(component).toMatchSnapshot();
    expect(handleClick).toHaveBeenCalled();
  });
});

describe('mount- rendering with event mocked | <MyComponent> shallow rendering', () => {
  const clickFn = jest.fn();
  test('mount- |<MyComponent /> should mocked handleClick', () => {
    const strings = ['first', 'second'];
    const component = mount(
      <MyComponent strings={strings} handleClick={clickFn} />
    );
    component.find('button#my-button-one').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
