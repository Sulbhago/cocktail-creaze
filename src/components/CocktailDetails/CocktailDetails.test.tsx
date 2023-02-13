import React from 'react';
import { shallow } from 'enzyme';
import { CocktailDetails } from '.';

describe('CocktailDetails', () => {
  it('renders without crashing', () => {
    shallow(<CocktailDetails />);
  });
});
