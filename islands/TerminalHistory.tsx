import { Input } from "../utils/constants.ts";
import TerminalOutput from "./TerminalOutput.tsx";

type Props = {
  inputs: Input[];
};
const TerminalHistory = ({ inputs }: Props) => {
  return (
    <div class="max-h-full overflow-scroll">
      {inputs.map((input) => <TerminalOutput input={input} />)}
    </div>
  );
};

export default TerminalHistory;
