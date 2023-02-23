import { StateUpdater, useCallback, useState } from "preact/hooks";
import { JSX } from "preact";
import { Input } from "../utils/constants.ts";
import { tw } from "twind";
import TerminalInfo from "../components/TerminalInfo.tsx";
import useFocusedInputRef from "../hooks/useFocusedInputRef.ts";
import { isValueInCMD } from "../utils/isValueInStringEnum.ts";
import TermLayout from "../components/TermLayout.tsx";

type Props = {
  setInputs: StateUpdater<Input[]>;
};
const TerminalInput = ({ setInputs }: Props) => {
  const initialInputVal = "";
  const [inputVal, setInputVal] = useState(initialInputVal);
  const [hasError, setHasError] = useState(false);
  const focusedInputRef = useFocusedInputRef();
  const handleOnInput = useCallback((
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    setInputVal(currentTarget.value);
  }, [inputVal]);

  const handleOnSubmit = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();
    const input = inputVal.trim();
    setInputs((state) => [...state, input]);
    setInputVal(initialInputVal);
    if (!isValueInCMD(input) && input !== "") setHasError(true);
  };

  return (
    <form class={tw`flex flex-col`} onSubmit={handleOnSubmit}>
      <label class={tw`text-green-500 font-extrabold`}>
        <TerminalInfo />
      </label>
      <TermLayout hasError={hasError}>
        <input
          ref={focusedInputRef}
          class={tw`flex-1 bg-gray-900 text-white focus:outline-none`}
          style={{ caretColor: "#a277ff" }}
          type="text"
          value={inputVal}
          onInput={handleOnInput}
          autoFocus
        />
      </TermLayout>
    </form>
  );
};

export default TerminalInput;
