export const convertStringToHyphenString = (str: string) => {
  return str.replace(/ /g, "-").toLowerCase();
};
