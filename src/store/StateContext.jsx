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
    publicationFilter: "",
    publicationType: "all",
    publicationYear: "",
  });

  function updateState(k, v) {
    setState((prev) => ({ ...prev, [k]: v }));
  }

  return (
    <StateContext.Provider value={state}>
      <UpdateStateContext.Provider value={updateState}>
        {children}
      </UpdateStateContext.Provider>
    </StateContext.Provider>
  );
}
