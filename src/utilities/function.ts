export const urlifyAndClean = (inputString: string) => {
  const urlFriendlyString = inputString.replace(/(%20| )/g, "-").toLowerCase();

  return urlFriendlyString;
};
