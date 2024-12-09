export function getFullYear() {
    return new Date().getFullYear();
}
export function getFooterCopy(isIndex) {
    if (isIndex === true)
    return "ALX";
    else return "ALX main dashboard";
}