import { tw } from "twind";
import { useContext } from "preact/hooks";
import { HistoryContext } from "./Terminal.tsx";
import TerminalOutput from "./TerminalOutput.tsx";

const TerminalHistory = () => {
  const { histories } = useContext(HistoryContext);

  return (
    <div class={tw`text-xs sm:text-sm md:text-base lg:text-lg text-white`}>
      {histories.map((history) => <TerminalOutput history={history} />)}
    </div>
  );
};

export default TerminalHistory;
