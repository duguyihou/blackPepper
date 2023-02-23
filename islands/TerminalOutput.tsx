import { tw } from "twind";
import NormalOutput from "../components/NormalOutput.tsx";
import OperationOutput from "../components/OperationOutput.tsx";
import TerminalError from "../components/TerminalError.tsx";
import TermLayout from "../components/TermLayout.tsx";
import { Info } from "../utils/constants.ts";
import {
  isValueInCMD,
  isValueInOperation,
} from "../utils/isValueInStringEnum.ts";

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
  if (!isValueInCMD(input) && !isValueInOperation(input)) {
    return <TerminalError error={input} />;
  }

  if (isValueInOperation(input)) {
    return <OperationOutput input={input} />;
  }
  return <NormalOutput input={input} />;
};

export default TerminalOutput;
