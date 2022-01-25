import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(<Button>Hello World</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render the provided children prop', function () {
    render(<Button>Hello World</Button>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

  test('Should receive event handlers', function () {
    const mockEventHandler = jest.fn();
    render(<Button onClick={mockEventHandler}>Hello World</Button>);
    userEvent.click(screen.getByText(/hello world/i));
    expect(mockEventHandler).toHaveBeenCalled();
  });
});
