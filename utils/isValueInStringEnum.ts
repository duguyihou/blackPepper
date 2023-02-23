import { CMD, Operation } from "./constants.ts";

export const isValueInStringEnum = <E extends string>(
  strEnum: Record<string, E>,
) => {
  const enumValues = Object.values(strEnum) as string[];

  return (value: string): value is E => enumValues.includes(value);
};

export const isValueInCMD = isValueInStringEnum(CMD);
export const isValueInOperation = isValueInStringEnum(Operation);
