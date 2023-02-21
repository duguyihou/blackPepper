import About from "../components/About.tsx";
import Welcome from "../components/Welcome.tsx";

const Outputs = {
  about: <About />,
  welcome: <Welcome />
};

type Props = {
  cmd: string;
};
const TerminalOutput = ({ cmd }: Props) => {
  return <div>{Outputs[cmd]}</div>;
};

export default TerminalOutput;
