import { tw } from "twind";
import BlankOutput from "../components/BlankOutput.tsx";
import NormalOutput from "../components/NormalOutput.tsx";
import TerminalError from "../components/TerminalError.tsx";
import TermLayout from "../components/TermLayout.tsx";
import { CMD, Info } from "../utils/constants.ts";
import { isValueInCMD } from "../utils/isValueInStringEnum.ts";

type Props = {
  info: Info;
};
const TerminalOutput = ({ info }: Props) => {
  const { input, isError } = info;
  if (input === "") {
    return (
      <TermLayout isError={isError}>
        <div class={tw`flex-1`} />
      </TermLayout>
    );
  }
  const cmd = `${input.charAt(0).toUpperCase()}${input.slice(1)}` as CMD;
  if (!isValueInCMD(cmd)) {
    return <TerminalError error={input} />;
  }
  return <NormalOutput input={input} />;
};

export default TerminalOutput;
