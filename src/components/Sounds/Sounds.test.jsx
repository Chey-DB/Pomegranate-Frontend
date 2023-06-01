import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, rerender } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Sounds from '.';

describe('Sounds', () => {
  beforeEach(() => {
    render(<Sounds />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a 'Play' button", () => {
    const PlayButton = screen.getByRole('button', { name: /Play/i });
    expect(PlayButton).toBeInTheDocument();
  });

  it("renders a 'Pause' button", () => {
    const PauseButton = screen.getByRole('button', { name: /Pause/i });
    expect(PauseButton).toBeInTheDocument();
  });

})