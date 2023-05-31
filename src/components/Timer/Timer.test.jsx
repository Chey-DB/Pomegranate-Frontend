import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, rerender } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Timer from '.';

describe('Timer', () => {
  beforeEach(() => {
    render(<Timer />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a 'Set Time' button", () => {
    const setTimeButton = screen.getByRole('button', { name: /Set Time/i });
    expect(setTimeButton).toBeInTheDocument();
  });

  it("renders a 'Start' button", () => {
    const startButton = screen.getByRole('button', { name: /Start/i });
    expect(startButton).toBeInTheDocument();
  });

  it("renders a 'Clear' button", () => {
    const clearButton = screen.getByRole('button', { name: /Clear/i });
    expect(clearButton).toBeInTheDocument();
  });

  it("renders a 'Stop' button once 'Start' button is pressed", () => {
    const startButton = screen.getByRole('button', { name: /Start/i });
    expect(startButton).toBeInTheDocument();
    userEvent.click(startButton)
    rerender(<Timer />)
    const stopButton = screen.getByRole('button', { name: /Stop/i });
    expect(stopButton).toBeInTheDocument()
  });

})



  // it("renders an input field for entering time when 'Set Time' is clicked", () => {
  //   const setTimeButton = screen.getByRole('button', { name: /Set Time/i });
  //   userEvent.click(setTimeButton);
  //   const input = screen.getByRole('input')
  //   expect(input).toBeInTheDocument()
  // })

