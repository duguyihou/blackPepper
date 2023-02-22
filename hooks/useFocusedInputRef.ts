import { useEffect, useRef } from "preact/hooks";

const useFocusedInputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const handleClick = () => {
    inputRef.current?.focus();
  };
  return inputRef;
};

export default useFocusedInputRef;
