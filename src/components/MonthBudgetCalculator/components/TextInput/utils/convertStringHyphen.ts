export const convertStringHyphen = (str: string) => {
  return str.replace(/ /g, "-").toLowerCase();
};
