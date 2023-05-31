import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Home from '.';

describe('Home Page', () => {
    
    beforeEach(() => {
        render(<Home />)
    })

    afterEach(() => {
        cleanup();
    })

    it('Renders the content of Home Page', async () => {
        
        const homePage = screen.getByText('Hello, this is the Home Page')


        expect(homePage).toBeInTheDocument()})
    


    

})
