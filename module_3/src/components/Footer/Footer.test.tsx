import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

test("component exists", () => {
    render(<Footer />);
    expect(screen.getByText(/info@neoflex.ru/i)).toBeInTheDocument();
});
