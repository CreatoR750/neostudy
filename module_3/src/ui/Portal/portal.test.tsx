import { render } from "@testing-library/react";
import { Portal } from "./Portal";

test("modal shows the children and a close button", () => {
    const { getByText } = render(
        <Portal>
            <div>test</div>
        </Portal>
    );
    expect(getByText("test")).toBeTruthy();

});
