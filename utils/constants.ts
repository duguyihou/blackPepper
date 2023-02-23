export enum CMD {
  About = "about",
  Welcome = "welcome",
  Help = "help",
}

export type EmptyInput = "";
export type Input = CMD | EmptyInput | string;
export type Info = {
  input: Input;
  isError: boolean;
};
