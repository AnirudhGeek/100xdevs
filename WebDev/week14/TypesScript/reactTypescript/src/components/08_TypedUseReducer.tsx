import { useReducer, type Dispatch } from "react";

//STEP1 => model the data => what all things we need for that particular component in localstate
type CounterState = {
  count: number;
  step: number;
};

//STEP2 =>  Action
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET"; to?: number };

function init(initialCount: number): CounterState {
  return { count: initialCount, step: 1 };
}

function counterReducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + state.step,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - state.step,
      };
    case "RESET":
      return {
        ...state,
        count: action.to ?? 0,
      };

    default:
      return state;
  }
}

export function TypesReducer({ initial = 0 }: { initial?: number }) {
  const [state, dispatch] = useReducer(counterReducer, initial, init);

  return <div>
    {state.count}
    <button onClick={()=>dispatch({type : "INCREMENT"})}>Increment</button>
    <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
    <button onClick={()=>dispatch({type : "RESET",to:2})}>Reset</button>
  </div>;
}




// passing type dispatch to another children/component
type CounterDispatch = Dispatch<Action>


export function SmallChild({dispatch} : {dispatch : CounterDispatch}){
    return (
        <div>
            <button onClick={()=>dispatch({type : "INCREMENT"})}>Click from child component</button>
        </div>
    )
}
