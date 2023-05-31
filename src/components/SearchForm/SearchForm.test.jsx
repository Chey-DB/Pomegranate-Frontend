import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import SearchForm from ".";

describe("SearchForm Component", () => {

    afterEach(() => {
        cleanup()
    })

    it("should display a search bar", () => {
        render(<SearchForm />);
        const element = screen.getByRole("search", "leaderboard-search-form");
        expect(element).toBeInTheDocument();
    })

    it("should update user state after searching", async () => {
        render(<SearchForm />);
        const searchBox = screen.getByRole("search-input");
        await userEvent.type(searchBox, "username");
        expect(searchBox.value).toBe("username");
    })

    it("should set InputText to search value and then clear input", async () => {
        let inputText = "";
        const setInputText = (text) => {
            inputText = text;
        };

        render(<SearchForm setInputText={setInputText} inputText={inputText} />);
        const searchBox = screen.getByRole("search-input");
        const submitButton = screen.getByRole("search-btn");

        await userEvent.type(searchBox, "username2");
        await userEvent.click(submitButton);

        expect(inputText).toBe("username2");
        expect(searchBox.value).toBe("");
    })
})
