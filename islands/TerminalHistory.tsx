import { Info } from "../utils/constants.ts";
import TerminalOutput from "./TerminalOutput.tsx";

type Props = {
  infoArray: Info[];
};
const TerminalHistory = ({ infoArray }: Props) => {
  return (
    <div class="max-h-full overflow-scroll">
      {infoArray.map((info) => <TerminalOutput info={info} />)}
    </div>
  );
};

export default TerminalHistory;
