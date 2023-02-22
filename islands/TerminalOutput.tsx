import { tw } from "twind";
import About from "../components/About.tsx";
import Empty from "../components/Empty.tsx";
import Welcome from "../components/Welcome.tsx";
import { CMD } from "../utils/constants.ts";

type Props = {
  cmd: CMD;
};
const TerminalOutput = ({ cmd }: Props) => {
  if (cmd === "") {
    return <Empty />;
  }
  const Output = { About, Welcome }[cmd];
  return (
    <div class={tw`py-1`}>
      <Output />
    </div>
  );
};

export default TerminalOutput;
