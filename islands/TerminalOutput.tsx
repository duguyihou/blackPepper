import About from "../components/About.tsx";

const Outputs = {
  about: <About />,
};

type Props = {
  cmd: string;
};
const TerminalOutput = ({ cmd }: Props) => {
  return <div>{Outputs[cmd]}</div>;
};

export default TerminalOutput;
