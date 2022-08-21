export const verifyString = (variable: string | undefined) => {
  return variable === "" ? undefined : variable;
};
