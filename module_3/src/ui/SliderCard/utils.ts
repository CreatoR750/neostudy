export const filterDescription = (str: string) => {
    if (str.includes("<")) {
        const newStr = str.slice(str.indexOf("<") - 1, str.indexOf(">") + 1);
        return str.replaceAll(newStr, "");
    } else return str;
};
