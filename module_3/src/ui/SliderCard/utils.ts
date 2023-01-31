export const filterDescription = (str: string) => {
    const newStr = str.slice(str.indexOf("<") - 1, str.indexOf(">") + 1);
    return str.replaceAll(newStr, "");
};
