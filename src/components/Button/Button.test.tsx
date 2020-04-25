import * as React from 'react';
import {shallow} from 'enzyme';

import Button from './Button';

describe('<Button/>', () => {
  test('Should render', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper).toMatchSnapshot();
  })
})