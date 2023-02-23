import { tw } from "twind";

type Props = {
  children: preact.ComponentChildren;
  hasError?: boolean;
};
const TermLayout = ({ children, hasError = false }: Props) => {
  return (
    <div class={tw`flex flex-row`}>
      <span
        class={tw`font-extrabold ${
          hasError ? `text-pink-600` : `text-green-500`
        }`}
      >
        &#62;
      </span>
      {children}
    </div>
  );
};

export default TermLayout;
