import { useMemo } from "react";

const useArray = <T>(length: number): T[] => {
  return useMemo(() => Array.from({ length }), [length]);
};

export default useArray;
