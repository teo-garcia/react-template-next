import { render, screen } from '@testing-library/react';
import { Global } from './Global';

describe('<Global /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(<Global>Hello World</Global>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render the provided children prop', function () {
    render(<Global>Hello World</Global>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
