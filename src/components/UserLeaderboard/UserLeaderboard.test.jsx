import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import UserLeaderboard from ".";

describe("UserLeaderboard Component", () => {
    beforeEach(() => {
        const users = [{ id: 1, username: "test" }, { id: 2, username: "test2" }, { id: 3, username: "test3" }]
        render(<UserLeaderboard users={users} />)
    })

    afterEach(() => {
        cleanup()
    })

    it("should display a heading", () => {
        const element = screen.getByRole("heading")
        expect(element).toBeInTheDocument();
    })

    it("should display a heading that says 'Leaderboard'", () => {
        const element = screen.getByRole("heading")
        expect(element.textContent).toBe("Leaderboard");
    })
})
