import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("Firebase Tests", () => {
  test("Test Querying Specific Quiz", () => {});
  test("Test Querying Entire Quiz Collection", () => {});

  test("Test Querying Specific Score", () => {});
  test("Test Querying Entire Score Collection", () => {});

  test("Test Querying Entire Topic Collection", () => {});

  test("Test Creating Quiz", () => {});
  test("Test Saving Score", () => {});
  test("Test Saving High Score", () => {});
});

describe("Trivia API Tests", () => {
  test("Make Request", () => {});
});

describe("React Component Tests", () => {
  test("Active Quiz Page Component", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    cleanup();
  });
  test("Create Quiz Page Component", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    cleanup();
  });
  test("Home Page Component", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    cleanup();
  });
  test("Leaderboard Page Component", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    cleanup();
  });
  test("Login Page Component", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    cleanup();
  });
  test("Quiz Summary Component", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    cleanup();
  });
  test("Topics Page Component", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    cleanup();
  });
});
