
import {
  Panel,
  RequiredChildrenPanel,
} from "./components/03_ChildrenReactNode";
import { Badge } from "./components/04_As_Const_Variable";
import { Button } from "./components/05_ComponentProps";
import { Counter } from "./components/06_state";

const App = () => {
  return (
    <div>
      {/* <UserCard id='1' name='Anirudh'/>
      <GreetA />
      <GreetB name='Anirudh' shout={true}/> */}
{/* 
      <Panel title="Panel" />
      <Panel
        title="Panel"
        children={
          <p>
            <ul>
              <li>one</li>
            </ul>
          </p>
        }
      />

      <RequiredChildrenPanel
        title="Required Children Panel"
        children={
          <p>
            <ul>
              <li>one</li>
            </ul>
          </p>
        }
      /> */}

      {/* <RequiredChildrenPanel title="Required Children Panel 1">
        {" "}
        <p>
          <ul>
            <li>one</li>
          </ul>
        </p>
      </RequiredChildrenPanel> */}
      {/* <Badge label={"hey there"} varients="secondary"/>
      <Button varient="primary" onClick={()=>alert("Button clicked")}>Text</Button> */}

       <Counter/>
    </div>
  );
};

export default App;
