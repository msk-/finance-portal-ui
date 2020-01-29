// TODO: Work through props required for successful rendering
import React from 'react';
import { render } from '@testing-library/react';
import { DatePicker, dateToStr } from '../components/DatePicker';

describe('<DatePicker />', () => {
  it('should render without crashing', () => {
    const epochFor24Jan2020 = 1579870320000;

    const props = {
      classes: {},
      defDate: new Date(epochFor24Jan2020),
      desc: '',
      onChange: () => {},
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    const rendered = render(<DatePicker {...props} />);
    expect(rendered).toBeTruthy();
  });
});

describe('dateToStr(dt)', () => {
  it('should return the string representation (YYYY-MM-DD) of a given Date object', () => {
    const epochFor24Jan2020 = 1579870320000;
    const dt = new Date(epochFor24Jan2020);
    const expected = '2020-01-24';
    const actual = dateToStr(dt);
    expect(actual).toEqual(expected);
  });
});