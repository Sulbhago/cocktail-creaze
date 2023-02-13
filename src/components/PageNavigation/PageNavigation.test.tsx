import React from 'react';
import { shallow } from 'enzyme';
import PageNavigation from '.';

describe('PageNavigation', () => {
  it('renders without crashing', () => {
    shallow(<PageNavigation />);
  });
});
