import { useContext, useReducer } from "react";
import { createContext } from "react";
const initialState = { sideBarClose: true };
function reducer(state, action) {
  switch (action.type) {
    case 1:
      return { ...state, sideBarClose: action.payload };
    default:
      throw new Error("wrong");
  }
}
const ProjectContext = createContext();
function PostContext({ children }) {
  const [{ sideBarClose }, dispatch] = useReducer(reducer, initialState);
  function handleSidebtn() {
    dispatch({ type: 1, payload: sideBarClose ? false : true });
  }
  return (
    <ProjectContext.Provider value={{ sideBarClose, handleSidebtn }}>
      {children}
    </ProjectContext.Provider>
  );
}
function usePost() {
  const context = useContext(ProjectContext);
  if (context === undefined) throw new Error("wrong outside of postcontext");
  return context;
}
export { PostContext, usePost };
