export const validateDate = (value: string) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected >= 18 || "You must be over 18 years of age";
};
