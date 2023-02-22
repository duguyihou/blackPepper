import { StateUpdater, useCallback, useState } from "preact/hooks";
import { JSX } from "preact";
import { Input } from "../utils/constants.ts";
import { isValueInCMD } from "../utils/isValueInStringEnum.ts";
import { tw } from "twind";
import TerminalInfo from "../components/TerminalInfo.tsx";

type Props = {
  setInputs: StateUpdater<Input[]>;
};
const TerminalInput = ({ setInputs }: Props) => {
  const initialInputVal = "";
  const [inputVal, setInputVal] = useState(initialInputVal);

  const handleOnInput = useCallback((
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    setInputVal(currentTarget.value);
  }, [inputVal]);

  const handleOnSubmit = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();
    const input = `${inputVal.trim().charAt(0).toUpperCase()}${
      inputVal.slice(1)
    }`;
    if (isValueInCMD(input) || input === "") {
      setInputs((state) => [...state, input]);
    } else {
      console.error("invalid cmd");
    }

    setInputVal(initialInputVal);
  };

  return (
    <form class={tw`flex flex-col`} onSubmit={handleOnSubmit}>
      <label class={tw`text-green-500 font-extrabold`}>
        <TerminalInfo />
      </label>
      <div class={tw`flex`}>
        <span class={tw`text-green-500 font-extrabold`}>
          &#62;
        </span>
        <input
          class={tw`flex-1 bg-gray-900 text-white focus:outline-none`}
          style={{ caretColor: "#a277ff" }}
          type="text"
          value={inputVal}
          onInput={handleOnInput}
          autoFocus
        />
      </div>
    </form>
  );
};

export default TerminalInput;
