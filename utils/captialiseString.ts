const captialiseString = (input: string) => {
  const output = `${input.charAt(0).toUpperCase()}${input.slice(1)}`;
  return output;
};

export default captialiseString;
