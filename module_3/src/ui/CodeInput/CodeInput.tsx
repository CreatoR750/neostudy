import { createRef, FC, RefObject, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedStore";
import { sendCode } from "../../store/slice/loanSlice";
import { RootState } from "../../store/store";
import "./codeInput.scss";

interface ICodeInputProps {
    numberOfInputs: number;
}

export const CodeInput: FC<ICodeInputProps> = ({ numberOfInputs }) => {
    const dispatch = useAppDispatch();
    const isSending = useAppSelector((state: RootState) => state.loan.isSending);
    const error = useAppSelector((state: RootState) => state.loan.error);
    const { applicationId } = useParams();
    const [inputRefsArray] = useState<RefObject<HTMLInputElement>[]>(() => Array.from({ length: numberOfInputs }, () => createRef()));
    const [letters, setLetters] = useState<string[]>(() => Array.from({ length: numberOfInputs }, () => ""));
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (letters[numberOfInputs - 1] !== "") {
            console.log(parseInt(letters.join("")));
            setTimeout(() => {
                dispatch(sendCode(applicationId as string, letters.join("")));
            }, 500);
        }
    }, [letters]);

    const handleKeyPress = (key: string) => {
        setCurrentIndex((prevIndex) => {
            let nextIndex: number;
            if (key === "Backspace") {
                nextIndex = prevIndex === 0 ? 0 : prevIndex - 1;
            } else {
                nextIndex = prevIndex < numberOfInputs - 1 ? prevIndex + 1 : numberOfInputs - 1;
            }
            const nextInput = inputRefsArray?.[nextIndex]?.current;
            nextInput?.focus();
            nextInput?.select();
            return nextIndex;
        });
    };

    useEffect(() => {
        if (inputRefsArray?.[0]?.current) {
            inputRefsArray[0].current.focus();
        }
        window.addEventListener("keyup", ({ key }) => handleKeyPress(key), false);
        return () => {
            window.removeEventListener("keyup", ({ key }) => handleKeyPress(key));
        };
    }, []);

    return (
        <div className="code-input">
            <h3>Please enter confirmation code</h3>
            <div className="code-input__wrapper">
                {inputRefsArray.map((ref, index) => {
                    return (
                        <input
                            className="code-input__input"
                            ref={ref}
                            type="tel"
                            placeholder="O"
                            key={`box${index}-1`}
                            onChange={(e) => {
                                const { value } = e.target;
                                setLetters((letters) => letters.map((letter, letterIndex) => (letterIndex === index ? value : letter)));
                            }}
                            onClick={() => {
                                inputRefsArray?.[currentIndex]?.current?.focus();
                                inputRefsArray?.[currentIndex]?.current?.select();
                            }}
                            value={letters[index]}
                            maxLength={1}
                        />
                    );
                })}
            </div>
            {isSending && (
                <div>
                    <Spinner />
                </div>
            )}
            {error && <span className="code-input__error">{error}</span>}
        </div>
    );
};
