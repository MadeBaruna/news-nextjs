import { shallow } from 'enzyme';
import React from 'react';
import CategoryItem from '../CategoryItem';

describe('Header', () => {
  it('Render Header', () => {
    const wrapper = shallow(<CategoryItem name="General" category="general" />);
    expect(wrapper).toMatchSnapshot();
  });
});
