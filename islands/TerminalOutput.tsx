import { tw } from "twind";
import About from "../components/About.tsx";
import Empty from "../components/Empty.tsx";
import Welcome from "../components/Welcome.tsx";
import { Input } from "../utils/constants.ts";

type Props = {
  input: Input;
};
const TerminalOutput = ({ input }: Props) => {
  if (input === "") {
    return <Empty />;
  }
  const Output = { About, Welcome }[input];
  return (
    <div class={tw`py-1`}>
      <Output />
    </div>
  );
};

export default TerminalOutput;
