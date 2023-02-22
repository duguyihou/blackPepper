import { tw } from "twind";
import About from "../components/About.tsx";
import Empty from "../components/Empty.tsx";
import TerminalError from "../components/TerminalError.tsx";
import Welcome from "../components/Welcome.tsx";
import { CMD, Input } from "../utils/constants.ts";
import { isValueInCMD } from "../utils/isValueInStringEnum.ts";

type Props = {
  input: Input;
};
const TerminalOutput = ({ input }: Props) => {
  if (input === "") {
    return <Empty />;
  }
  const cmd = `${input.charAt(0).toUpperCase()}${input.slice(1)}` as CMD;
  if (!isValueInCMD(cmd)) {
    return <TerminalError error={input} />;
  }
  const Output = { About, Welcome }[cmd];
  return (
    <div class={tw`py-1`}>
      <Output />
    </div>
  );
};

export default TerminalOutput;
