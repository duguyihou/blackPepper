import TerminalHistory from "../islands/TerminalHistory.tsx";
import TerminalInput from "../islands/TerminalInput.tsx";
import { useState } from "preact/hooks";
import { CMD } from "../utils/constants.ts";
import { tw } from "twind";

const Terminal = () => {
  const [cmds, setCmds] = useState([CMD.Welcome]);
  return (
    <div
      class={tw`w-3/5 h-2/3 shadow-2xl border-purple-900 p-4 flex flex-col justify-start`}
    >
      <TerminalHistory cmds={cmds} />
      <TerminalInput setCmds={setCmds} />
    </div>
  );
};

export default Terminal;
