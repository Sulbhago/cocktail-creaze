import React from 'react';
import { shallow } from 'enzyme';
import Cocktails from '.';
const navigate = jest.fn()

describe('Cocktails', () => {
  it('renders without crashing', () => {
    shallow(<Cocktails/>);
  });
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));
