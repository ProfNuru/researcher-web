import { createContext, useContext, useState } from "react";
const StateContext = createContext();
const UpdateStateContext = createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function useUpdateStateContext() {
  return useContext(UpdateStateContext);
}

export function StateProvider({ children }) {
  const [state, setState] = useState({
    researchFilter: "all",
  });

  function updateState(k, v) {
    if (state[k]) {
      setState((prev) => ({ ...prev, [k]: v }));
    }
  }

  return (
    <StateContext.Provider value={state}>
      <UpdateStateContext.Provider value={updateState}>
        {children}
      </UpdateStateContext.Provider>
    </StateContext.Provider>
  );
}
