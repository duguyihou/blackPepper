import TerminalHistories from "../islands/TerminalHistories.tsx";
import TerminalInput from "../islands/TerminalInput.tsx";
import { StateUpdater, useRef, useState } from "preact/hooks";
import { createContext } from "preact";
import { CMD, History } from "../utils/constants.ts";
import { tw } from "twind";

export const HistoryContext = createContext<
  { histories: History[]; setHistories: StateUpdater<History[]> }
>({
  histories: [],
  setHistories: (
    _: History[] | ((prevState: History[]) => History[]),
  ): void => {
    throw new Error("Function not implemented.");
  },
});

const Terminal = () => {
  const [histories, setHistories] = useState<History[]>([{
    input: CMD.Welcome,
    isError: false,
  }]);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <HistoryContext.Provider value={{ histories, setHistories }}>
      <div
        ref={containerRef}
        class={tw`w-2/5 h-2/3 p-4 flex flex-col justify-start overflow-scroll`}
      >
        <TerminalHistories />
        <TerminalInput
          containerRef={containerRef}
        />
      </div>
    </HistoryContext.Provider>
  );
};

export default Terminal;
