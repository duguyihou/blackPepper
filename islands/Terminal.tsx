import TerminalHistory from "../islands/TerminalHistory.tsx";
import TerminalInput from "../islands/TerminalInput.tsx";
import { StateUpdater, useRef, useState } from "preact/hooks";
import { createContext } from "preact";
import { CMD, Info } from "../utils/constants.ts";
import { tw } from "twind";

export const HistoryContext = createContext<
  { infoArray: Info[]; setInfoArray: StateUpdater<Info[]> }
>({
  infoArray: [],
  setInfoArray: (value: Info[] | ((prevState: Info[]) => Info[])): void => {
    throw new Error("Function not implemented.");
  },
});

const Terminal = () => {
  const [infoArray, setInfoArray] = useState<Info[]>([{
    input: CMD.Welcome,
    isError: false,
  }]);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <HistoryContext.Provider value={{ infoArray, setInfoArray }}>
      <div
        ref={containerRef}
        class={tw`w-3/5 h-2/3 p-4 flex flex-col justify-start overflow-scroll`}
      >
        <TerminalHistory infoArray={infoArray} />
        <TerminalInput
          containerRef={containerRef}
        />
      </div>
    </HistoryContext.Provider>
  );
};

export default Terminal;
