import { tw } from "twind";
import TermLayout from "./TermLayout.tsx";

type Props = {
  error: string;
};
const TerminalError = ({ error }: Props) => {
  return (
    <TermLayout>
      <p class={tw`text-white`}>
        {`command not found: ${error}`}
      </p>
    </TermLayout>
  );
};

export default TerminalError;
