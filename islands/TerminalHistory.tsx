import { CMD } from "../utils/constants.ts";
import TerminalOutput from "./TerminalOutput.tsx";

type Props = {
  cmds: CMD[];
};
const TerminalHistory = ({ cmds }: Props) => {
  return (
    <div>
      {cmds.map((cmd) => <TerminalOutput cmd={cmd} />)}
    </div>
  );
};

export default TerminalHistory;
