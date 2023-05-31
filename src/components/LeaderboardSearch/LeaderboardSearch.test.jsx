import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import axios from "axios";

import LeaderboardSearch from ".";

describe("LeaderboardSearch Component", () => {

    afterEach(() => {
        cleanup()
    })

    it("renders the search form", () => {
        render(<LeaderboardSearch users={[]} />)
        const searchForm = screen.getByRole("search")
        expect(searchForm).toBeInTheDocument();
    })

    it("maps the correct number of users based on GET call", async () => {

        const userData = [{
            "id": 1,
            "username": "testUser",
            "pomodoroCount": 10
        },
        {
            "id": 2,
            "username": "testUser2",
            "pomodoroCount": 11
        }]

        vi.spyOn(axios, "get").mockResolvedValue({ data: userData });
        render(<LeaderboardSearch users={userData} />)

        const LeaderboardItems = await screen.findAllByRole("leaderboard-items");
        expect(LeaderboardItems).toHaveLength(userData.length);
    })
})
