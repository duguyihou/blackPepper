export enum CMD {
  About = "About",
  Welcome = "Welcome",
}

export type EmptyInput = "";
export type Input = CMD | EmptyInput | string;
export type Info = {
  input: Input;
  isError: boolean;
};
