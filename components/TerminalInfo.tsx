import { tw } from "twind";

const TerminalInfo = () => {
  return (
    <div>
      <span class={tw`text-white`}>visitor</span>
      @
      <span class={tw`text-green-500`}>kong.deno.dev</span>
    </div>
  );
};

export default TerminalInfo;
