import { tw } from "twind";
import TermLayout from "./TermLayout.tsx";

const BlankOutput = () => {
  return (
    <TermLayout>
      <div class={tw`flex-1`} />
    </TermLayout>
  );
};

export default BlankOutput;
