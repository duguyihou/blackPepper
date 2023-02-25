import { History } from "../utils/constants.ts";
import TerminalOutput from "./TerminalOutput.tsx";

type Props = {
  histories: History[];
};
const TerminalHistory = ({ histories }: Props) => {
  return (
    <div>
      {histories.map((history) => <TerminalOutput history={history} />)}
    </div>
  );
};

export default TerminalHistory;
