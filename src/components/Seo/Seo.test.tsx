import { render } from '@testing-library/react';
import Seo from './Seo';

describe('<Layout /> tests', function () {
  test('Should not crash', function () {
    render(<Seo title="Hello" description="World" />);
  });
});
