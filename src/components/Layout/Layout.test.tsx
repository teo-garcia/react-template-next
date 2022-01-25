import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('<Layout /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(<Layout>Hello World</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render the provided children prop', function () {
    render(<Layout>Hello World</Layout>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
