import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NotFound from '.';

describe('Not Found Page', () => {
    
    beforeEach(() => {
        render(<NotFound />)
    })

    afterEach(() => {
        cleanup();
    })

    it('Renders a page that does not exist', async () => {
        
        const notFoundPage = screen.getByText('Page Not Found')


        expect(notFoundPage).toBeInTheDocument()})
    


    

})
