import TerminalHistory from "../islands/TerminalHistory.tsx";
import TerminalInput from "../islands/TerminalInput.tsx";

const Terminal = () => {
  return (
    <div>
      <TerminalHistory />
      <TerminalInput />
    </div>
  );
};

export default Terminal;
