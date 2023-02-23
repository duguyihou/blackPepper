import TerminalHistory from "../islands/TerminalHistory.tsx";
import TerminalInput from "../islands/TerminalInput.tsx";
import { useState } from "preact/hooks";
import { CMD, Info } from "../utils/constants.ts";
import { tw } from "twind";

const Terminal = () => {
  const [infoArray, setInfoArray] = useState<Info[]>([{
    input: CMD.Welcome,
    isError: false,
  }]);
  return (
    <div
      class={tw`w-3/5 h-2/3 shadow-2xl border-purple-900 p-4 flex flex-col justify-start`}
    >
      <TerminalHistory infoArray={infoArray} />
      <TerminalInput setInfoArray={setInfoArray} />
    </div>
  );
};

export default Terminal;
