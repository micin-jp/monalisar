export const isNull: Function = function(obj: any): boolean {
  if (typeof(obj) === 'undefined' || obj === null || obj === undefined) {
    return true;
  } else {
    return false;
  }
};
