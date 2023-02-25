import {
  Ref,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "preact/hooks";
import { tw } from "twind";
import { JSX } from "preact";
import TerminalInfo from "../components/TerminalInfo.tsx";
import useFocusedInputRef from "../hooks/useFocusedInputRef.ts";
import {
  isValueInCMD,
  isValueInOperation,
} from "../utils/isValueInStringEnum.ts";
import TermLayout from "../components/TermLayout.tsx";
import { HistoryContext } from "./Terminal.tsx";

type Props = {
  containerRef: Ref<HTMLDivElement>;
};
const TerminalInput = ({ containerRef }: Props) => {
  const { infoArray, setInfoArray } = useContext(HistoryContext);
  const [inputVal, setInputVal] = useState("");
  const [isError, setIsError] = useState(false);
  const focusedInputRef = useFocusedInputRef();
  const [pointer, setPointer] = useState(infoArray.length + 1);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current?.scrollHeight);
  }, [infoArray]);

  const handleOnInput = useCallback((
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    setInputVal(currentTarget.value);
  }, [inputVal]);

  const handleOnSubmit = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();
    const input = inputVal.trim();
    const info = { input, isError };
    setInfoArray((state) => [...state, info]);
    setInputVal("");
    setPointer(infoArray.length + 1);
    if (
      (input !== "" && !isValueInCMD(input)) && !isValueInOperation(input) ||
      (input === "" && isError)
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleOnKeyDown = (
    event: JSX.TargetedKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "ArrowUp") {
      if (pointer === 0) return;
      setInputVal(infoArray[pointer - 1].input);
      setPointer((prevState) => prevState - 1);
    }
    if (event.key === "ArrowDown") {
      if (pointer === infoArray.length - 1) {
        setInputVal("");
        return;
      }
      setInputVal(infoArray[pointer + 1].input);
      setPointer((prevState) => prevState + 1);
    }
  };

  return (
    <form class={tw`flex flex-col`} onSubmit={handleOnSubmit}>
      <label htmlFor="terminal-input" class={tw`text-green-500 font-extrabold`}>
        <TerminalInfo />
      </label>
      <TermLayout isError={isError}>
        <input
          id="terminal-input"
          ref={focusedInputRef}
          class={tw`flex-1 bg-gray-900 text-white focus:outline-none`}
          style={{ caretColor: "#a277ff" }}
          type="text"
          value={inputVal}
          onInput={handleOnInput}
          onKeyDown={handleOnKeyDown}
          autoFocus
        />
      </TermLayout>
    </form>
  );
};

export default TerminalInput;
