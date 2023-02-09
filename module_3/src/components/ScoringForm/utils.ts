export const validateDate = (value: string) => {
    const selected = new Date(value);
    const now = new Date();
    return selected < now || "invalid date";
};
