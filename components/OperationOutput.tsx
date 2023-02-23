import { tw } from "twind";
import { useContext } from "preact/hooks";
import { Operation } from "../utils/constants.ts";
import { HistoryContext } from "../islands/Terminal.tsx";

type Props = {
  input: Operation;
};
const OperationOutput = ({ input }: Props) => {
  const { infoArray, setInfoArray } = useContext(HistoryContext);
  if (input === Operation.Clear) {
    setInfoArray([]);
  }

  return (
    <div class={tw`text-white`}>
      {infoArray.map((info, idx) => (
        <div class={tw`flex flex-row`}>
          <div class={tw`w-12`}>{idx + 1}</div>
          <div>{info.input}</div>
        </div>
      ))}
    </div>
  );
};

export default OperationOutput;
