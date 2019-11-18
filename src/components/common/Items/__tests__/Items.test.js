import React from 'react';
import renderer from 'react-test-renderer';

import Items from '../Items';

describe('<Items />', () => {
  test('<Items /> render ul list with three items: one, two and three,', () => {
    const items = ['one', 'two', 'three'];
    const tree = renderer.create(<Items items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Items />, rendered only with one item', () => {
    const item = ['one'];
    const tree = renderer.create(<Items items={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Items /> render default message', () => {
    const tree = renderer.create(<Items />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
