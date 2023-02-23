export enum CMD {
  About = "about",
  Welcome = "welcome",
  Help = "help",
}

export enum Operation {
  Clear = "clear",
  History = "history",
}
export type EmptyInput = "";
export type Input = CMD | Operation | EmptyInput | string;
export type Info = {
  input: Input;
  isError: boolean;
};
