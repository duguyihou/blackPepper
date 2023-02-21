import About from "../components/About.tsx";
import Welcome from "../components/Welcome.tsx";
import { CMD } from "../utils/constants.ts";

type Props = {
  cmd: CMD;
};
const TerminalOutput = ({ cmd }: Props) => {
  const Output = { About, Welcome }[cmd];
  return (
    <div>
      <Output />
    </div>
  );
};

export default TerminalOutput;
