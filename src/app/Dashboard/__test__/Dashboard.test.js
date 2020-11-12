import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '..';

const Component = () => (
  <Router>
    <Dashboard />
  </Router>
);

jest.mock('hooks/useUser', () => ({
  useUser: () => ({
    currentUser: {},
  }),
}));

describe('<Admin />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
