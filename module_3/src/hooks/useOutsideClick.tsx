import { useEffect, useRef } from "react";

export const useOutsideClick = (cb: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
                cb();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return ref;
};

export default useOutsideClick;
