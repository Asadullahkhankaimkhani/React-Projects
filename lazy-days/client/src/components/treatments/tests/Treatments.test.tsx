import {  screen } from '@testing-library/react';
import { renderWithQueryClient } from 'test-utils';

import { Treatments } from '../Treatments';

test('renders response from query', async () => {
    renderWithQueryClient(<Treatments />);

    const treatments = await screen.findAllByRole('heading' ,{
      name :/massage|facial|scrub/i,
    });

    expect(treatments).toHaveLength(3);
});
