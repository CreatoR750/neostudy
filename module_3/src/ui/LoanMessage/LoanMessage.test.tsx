import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoanMessage } from "./LoanMessage";

test("component exists", () => {
    render(<LoanMessage title="title" message="Message" />);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/Message/i)).toBeInTheDocument();
});

test("component onclick", () => {
    const handleClick = jest.fn();
    render(<LoanMessage title="title" message="Message" buttonText="click" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/click/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
