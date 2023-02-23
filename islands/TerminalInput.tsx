import {
  Ref,
  StateUpdater,
  useCallback,
  useEffect,
  useState,
} from "preact/hooks";
import { tw } from "twind";
import { JSX } from "preact";
import { Info } from "../utils/constants.ts";
import TerminalInfo from "../components/TerminalInfo.tsx";
import useFocusedInputRef from "../hooks/useFocusedInputRef.ts";
import { isValueInCMD } from "../utils/isValueInStringEnum.ts";
import TermLayout from "../components/TermLayout.tsx";

type Props = {
  containerRef: Ref<HTMLDivElement>;
  infoArray: Info[];
  setInfoArray: StateUpdater<Info[]>;
};
const TerminalInput = ({ setInfoArray, containerRef, infoArray }: Props) => {
  const [inputVal, setInputVal] = useState("");
  const [isError, setIsError] = useState(false);
  const focusedInputRef = useFocusedInputRef();

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
    if ((input !== "" && !isValueInCMD(input)) || (input === "" && isError)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <form class={tw`flex flex-col`} onSubmit={handleOnSubmit}>
      <label class={tw`text-green-500 font-extrabold`}>
        <TerminalInfo />
      </label>
      <TermLayout isError={isError}>
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
