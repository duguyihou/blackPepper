import { tw } from "twind";

type Props = {
  hasError: boolean;
};
const Sign = ({ hasError = true }: Props) => {
  return (
    <span
      class={tw`${
        hasError ? `text-green-500` : `text-pink-600`
      }  font-extrabold`}
    >
      &#62;
    </span>
  );
};

export default Sign;
