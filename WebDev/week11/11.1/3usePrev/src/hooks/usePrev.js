import { useEffect } from "react";
import { useRef } from "react";

export function usePrev(state) {
  const ref = useRef();
  console.log("re-render happens with the new value = " + state);

  //this useEffect make sure that ref.current value should change to the state whenever the state value changes
  useEffect(() => {
    console.log("updated the ref to be = " + ref.current);
    ref.current = state;
  }, [state]);

  console.log("returned = " + ref.current);
  return ref.current;
}

//it uses the property of react that react will return first and effects get called later
// so workflow will go like
//      1. declared ref (which will not rerender because a variable declared with useRef does not cause a re-render when it changes)
//      2. directly returns ref.current which is firsty undefined and later on updated to 0,1,2,...
//      3. afterwards useEffect get called and stores ref.current value as state