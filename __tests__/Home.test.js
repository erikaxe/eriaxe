import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
    describe("when rendered, content and layout should be as expected", () => {
        it("renders a heading with the text 'Your next developer?'", () => {
            render(<Home />);

            const heading = screen.getByText("Your next developer?");

            expect(heading).toBeInTheDocument();
        });
        it("renders an h1 heading", () => {
            render(<Home />);

            const heading = screen.getByText("Your next developer?");

            expect(heading.tagName).toBe("H1");
        });
        it("renders a centered heading", () => {
            render(<Home />);

            const heading = screen.getByText("Your next developer?");

            expect(heading).toHaveStyle({ textAlign: "center" });
        });
    });
});
