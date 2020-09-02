import { useLocalStorage } from "./useLocalStorage";

export const useDarkmode = initialState => {
  const [ mode, setMode ] = useLocalStorage( "darkmode", initialState );
  return [ mode, setMode ];
}