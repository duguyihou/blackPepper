import { tw } from "twind";

type Props = {
  error: string;
};
const TerminalError = ({ error }: Props) => {
  return (
    <div class={tw`flex flex-row`}>
      <span class={tw`text-pink-600 font-extrabold`}>
        &#62;
      </span>
      <p class={tw`text-white`}>
        {`command not found: ${error}`}
      </p>
    </div>
  );
};

export default TerminalError;
