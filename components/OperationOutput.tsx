import { tw } from "twind";
import { useContext } from "preact/hooks";
import { Operation } from "../utils/constants.ts";
import { HistoryContext } from "../islands/Terminal.tsx";

type Props = {
  input: Operation;
};
const OperationOutput = ({ input }: Props) => {
  const { histories, setHistories } = useContext(HistoryContext);
  if (input === Operation.Clear) {
    setHistories([]);
  }

  return (
    <div class={tw`text-white`}>
      {histories.map((info, idx) => (
        <div class={tw`flex flex-row`}>
          <div class={tw`w-12`}>{idx + 1}</div>
          <div>{info.input}</div>
        </div>
      ))}
    </div>
  );
};

export default OperationOutput;
