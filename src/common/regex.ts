/* ref: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url*/
const exp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
export const regex = new RegExp(exp);
