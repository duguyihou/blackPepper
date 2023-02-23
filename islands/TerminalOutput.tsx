import BlankOutput from "../components/BlankOutput.tsx";
import NormalOutput from "../components/NormalOutput.tsx";
import TerminalError from "../components/TerminalError.tsx";
import { CMD, Input } from "../utils/constants.ts";
import { isValueInCMD } from "../utils/isValueInStringEnum.ts";

type Props = {
  input: Input;
};
const TerminalOutput = ({ input }: Props) => {
  if (input === "") {
    return <BlankOutput />;
  }
  const cmd = `${input.charAt(0).toUpperCase()}${input.slice(1)}` as CMD;
  if (!isValueInCMD(cmd)) {
    return <TerminalError error={input} />;
  }
  return <NormalOutput input={input} />;
};

export default TerminalOutput;
