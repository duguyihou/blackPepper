import { tw } from "twind";
import TermLayout from "./TermLayout.tsx";

type Props = {
  error: string;
};
const TerminalError = ({ error }: Props) => {
  return (
    <TermLayout>
      <p>
        {`command not found: ${error}`}
      </p>
    </TermLayout>
  );
};

export default TerminalError;
