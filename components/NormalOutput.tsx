import { tw } from "twind";
import { CMD } from "../utils/constants.ts";
import TermLayout from "./TermLayout.tsx";
import About from "./About.tsx";
import Welcome from "./Welcome.tsx";

type Props = {
  input: string;
};
const NormalOutput = ({ input }: Props) => {
  const cmd = `${input.charAt(0).toUpperCase()}${input.slice(1)}` as CMD;
  const Output = { About, Welcome }[cmd];
  return (
    <TermLayout>
      <div class={tw`flex flex-col`}>
        <p class={tw`text-white`}>{input}</p>
        <Output />
      </div>
    </TermLayout>
  );
};

export default NormalOutput;
