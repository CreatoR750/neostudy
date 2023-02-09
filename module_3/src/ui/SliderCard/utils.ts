export const filterDescription = (str: string) => {
    if (str && str.includes("<")) {
        return str.replaceAll(/<\/?[^>]+(>|$)/g, "");
    } else return str;
};
