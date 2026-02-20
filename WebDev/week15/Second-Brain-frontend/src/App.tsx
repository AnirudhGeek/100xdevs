
import { PlusIcon } from "./components/icon/PlusIcon";
import { ShareIcon } from "./components/icon/ShareIcon";
import { Button } from "./components/ui/Button";

const App = () => {
  return (
    <div className="flex">
      <Button variant="primary" size="md" text="Share" startIcon={<ShareIcon size="md"/>} />
      <Button variant="secondary" size="md" text="Add Content" startIcon={<PlusIcon size="md"/>}/>
    </div>
  );
};

export default App;
