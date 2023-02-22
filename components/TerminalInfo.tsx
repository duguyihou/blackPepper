import { tw } from "twind";

const TerminalInfo = () => {
  return (
    <div>
      <span class={tw`text-blue-700`}>visitor</span>
      @
      <span class={tw`text-green-500`}>initial</span>
    </div>
  );
};

export default TerminalInfo;
