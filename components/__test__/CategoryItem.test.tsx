import { shallow } from 'enzyme';
import React from 'react';
import CategoryItem from '../CategoryItem';

describe('CategoryItem', () => {
  it('Render CategoryItem', () => {
    const wrapper = shallow(<CategoryItem name="General" category="general" />);
    expect(wrapper).toMatchSnapshot();
  });
});
