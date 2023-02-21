import { CMD } from "../utils/constants.ts";
import TerminalOutput from "./TerminalOutput.tsx";

type Props = {
  cmds: CMD[];
};
const TerminalHistory = ({ cmds }: Props) => {
  return (
    <div class="max-h-96 overflow-scroll">
      {cmds.map((cmd) => <TerminalOutput cmd={cmd} />)}
    </div>
  );
};

export default TerminalHistory;
