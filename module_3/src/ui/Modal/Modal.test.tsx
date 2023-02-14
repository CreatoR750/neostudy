import { render, fireEvent, screen, getByText } from "@testing-library/react";
import { Modal } from "./Modal";
import "@testing-library/jest-dom";

test("modal shows", () => {
    const handleClose = jest.fn();
    const handleClick = jest.fn();

    render(<Modal title="title" isOpened={true} message="message" onClose={handleClose} onClick={handleClick} />);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/message/i)).toBeInTheDocument();
});

test("modal click", () => {
    const handleClose = jest.fn();
    const handleClick = jest.fn();

    render(<Modal title="title" isOpened={true} message="message" onClose={handleClose} onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Deny/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});


test("modal close", () => {
    const handleClose = jest.fn();
    const handleClick = jest.fn();

    render(<Modal title="title" isOpened={true} message="message" onClose={handleClose} onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Cancel/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
});
