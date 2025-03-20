import { useMemo } from "react";

const useArray = <T>(length: number): T[] =>
  useMemo(() => Array.from({ length }), [length]);

export default useArray;
