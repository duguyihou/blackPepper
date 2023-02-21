import TerminalHistory from "../islands/TerminalHistory.tsx";
import TerminalInput from "../islands/TerminalInput.tsx";
import { useState } from "preact/hooks";
import { CMD } from "../utils/constants.ts";
const Terminal = () => {
  const [cmds, setCmds] = useState([CMD.Welcome]);
  return (
    <div class="h-fit">
      <TerminalHistory cmds={cmds} />
      <TerminalInput setCmds={setCmds} />
    </div>
  );
};

export default Terminal;
