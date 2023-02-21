import { useState } from "preact/hooks";
import { JSX } from "preact";

const TerminalInput = () => {
  const [inputVal, setInputVal] = useState("");
  const handleOnInput = (
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    setInputVal(currentTarget.value);
  };
  return (
    <form>
      <label>&#62;</label>
      <input type="text" value={inputVal} onInput={handleOnInput} />
    </form>
  );
};

export default TerminalInput;
