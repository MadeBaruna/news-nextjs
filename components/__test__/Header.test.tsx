import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';

describe('Header', () => {
  it('Render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
