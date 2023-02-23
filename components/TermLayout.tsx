import { tw } from "twind";

type Props = {
  children: preact.ComponentChildren;
  isError?: boolean;
};
const TermLayout = ({ children, isError = false }: Props) => {
  return (
    <div class={tw`flex flex-row`}>
      <span
        class={tw`font-extrabold ${
          isError ? `text-pink-600` : `text-green-500`
        }`}
      >
        &#62;&nbsp;
      </span>
      {children}
    </div>
  );
};

export default TermLayout;
