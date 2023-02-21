import { StateUpdater, useState } from "preact/hooks";
import { JSX } from "preact";
import { CMD } from "../utils/constants.ts";
import { isValueInCMD } from "../utils/isValueInStringEnum.ts";

type Props = {
  setCmds: StateUpdater<CMD[]>;
};
const TerminalInput = ({ setCmds }: Props) => {
  const initialInputVal = "";
  const [inputVal, setInputVal] = useState(initialInputVal);
  const handleOnInput = (
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    setInputVal(currentTarget.value);
  };

  const handleOnSubmit = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();
    const cmd = `${inputVal.charAt(0).toUpperCase()}${
      inputVal.slice(1)
    }` as CMD;
    if (!isValueInCMD(cmd)) {
      console.error("invalid cmd");
    } else {
      setCmds((state) => [...state, cmd]);
    }

    setInputVal(initialInputVal);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label>&#62;</label>
      <input type="text" value={inputVal} onInput={handleOnInput} />
    </form>
  );
};

export default TerminalInput;
