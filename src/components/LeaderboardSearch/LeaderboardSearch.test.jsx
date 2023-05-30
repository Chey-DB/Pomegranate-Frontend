import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import axios from "axios";

import LeaderboardSearch from ".";

describe("LeaderboardSearch Component", () => {

    it("renders the search form", () => {
        render(<LeaderboardSearch />)

        const searchForm = screen.getByRole("search")
        expect(searchForm).toBeInTheDocument();
    })

    it("maps the correct number of users based on GET call", async () => {

        const userData = [{
            "id": 1,
            "username": "testUser",
            "pomodoroCountTotal": 10
        },
        {
            "id": 2,
            "username": "testUser2",
            "pomodoroCountTotal": 11
        }]

        vi.spyOn(axios, "get").mockResolvedValue({ data: userData });

        render(<LeaderboardSearch />)

        await waitFor(() => {
            const LeaderboardItems = screen.getAllByRole("leaderboard-item");
            expect(LeaderboardItems).toHaveLength(userData.length);
        })
    })
})
