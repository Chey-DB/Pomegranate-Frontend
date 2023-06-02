import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
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
        localStorage.clear();
    })

    it("renders the leaderboard page", () => {
        localStorage.setItem('isLoggedIn', true);
        const leaderboard = screen.getByRole("link", { name: /leaderboard/i });
        expect(leaderboard).toBeInTheDocument();
        localStorage.clear();
    })

    it("renders the profile page", () => {
        localStorage.setItem('isLoggedIn', true);
        const profile = screen.getByRole("link", { name: /profile/i });
        expect(profile).toBeInTheDocument();
        localStorage.clear();
    })

    it("renders the login page", () => {
        localStorage.setItem('isLoggedIn', false);
        const login = screen.getByRole("link", { name: /login/i });
        expect(login).toBeInTheDocument();
        localStorage.clear();
    })

    it("renders the signup page", () => {
        localStorage.setItem('isLoggedIn', false);
        const signup = screen.getByRole("link", { name: /signup/i });
        expect(signup).toBeInTheDocument();
        localStorage.clear();
    })
})
