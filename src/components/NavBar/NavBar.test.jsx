import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import NavBar from ".";

describe("NavBar component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    })

    it("renders the home page", () => {
        const home = screen.getByRole("link", { name: /home/i });
        expect(home).toBeInTheDocument();
    })

    it("renders the leaderboard page", () => {
        const leaderboard = screen.getByRole("link", { name: /leaderboard/i });
        expect(leaderboard).toBeInTheDocument();
    })

    it("renders the profile page", () => {
        const profile = screen.getByRole("link", { name: /profile/i });
        expect(profile).toBeInTheDocument();
    })

    it("renders the login page", () => {
        const login = screen.getByRole("link", { name: /login/i });
        expect(login).toBeInTheDocument();
    })

    it("renders the signup page", () => {
        const signup = screen.getByRole("link", { name: /signup/i });
        expect(signup).toBeInTheDocument();
    })
})
