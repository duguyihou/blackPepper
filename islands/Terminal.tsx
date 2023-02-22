import TerminalHistory from "../islands/TerminalHistory.tsx";
import TerminalInput from "../islands/TerminalInput.tsx";
import { useState } from "preact/hooks";
import { CMD, Input } from "../utils/constants.ts";
import { tw } from "twind";

const Terminal = () => {
  const [inputs, setInputs] = useState<Input[]>([CMD.Welcome]);
  return (
    <div
      class={tw`w-3/5 h-2/3 shadow-2xl border-purple-900 p-4 flex flex-col justify-start`}
    >
      <TerminalHistory inputs={inputs} />
      <TerminalInput setInputs={setInputs} />
    </div>
  );
};

export default Terminal;
