import { tw } from "twind";
import TermLayout from "./TermLayout.tsx";

type Props = {
  error: string;
};
const TerminalError = ({ error }: Props) => {
  return (
    <TermLayout>
      <p class={tw`text-xs sm:text-sm md:text-base lg:text-lg text-white`}>
        {`command not found: ${error}`}
      </p>
    </TermLayout>
  );
};

export default TerminalError;
