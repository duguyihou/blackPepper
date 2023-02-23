import { tw } from "twind";
import TermLayout from "./TermLayout.tsx";
import About from "./About.tsx";
import Welcome from "./Welcome.tsx";

const outputs = { about: About, welcome: Welcome };
type Props = {
  input: keyof typeof outputs;
};

const NormalOutput = ({ input }: Props) => {
  const Output = outputs[input];
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
