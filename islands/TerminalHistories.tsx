import { useContext } from "preact/hooks";
import { HistoryContext } from "./Terminal.tsx";
import TerminalOutput from "./TerminalOutput.tsx";

const TerminalHistory = () => {
  const { histories } = useContext(HistoryContext);
  console.log("🐵 history ------ ");
  return (
    <div>
      {histories.map((history) => <TerminalOutput history={history} />)}
    </div>
  );
};

export default TerminalHistory;
