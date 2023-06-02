import React from 'react';
import { render, screen } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import App from './index';

describe('App component', () => {
  beforeEach(() => {
    fetchMock.mock('*', { tasks: [] });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('fetches data and renders the tasks correctly', async () => {
    render(<App />);

    
    await screen.findByText('Task 1');

    
    const task1 = screen.getByText('Task 1');
    expect(task1).toBeInTheDocument();
    // for this test you must npm install --save-dev fetch-mock dont ask why

  });
});
