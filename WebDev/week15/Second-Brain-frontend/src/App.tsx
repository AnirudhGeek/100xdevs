import { useState } from "react";
import { PlusIcon } from "./components/icon/PlusIcon";
import { ShareIcon } from "./components/icon/ShareIcon";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CreateContentModal } from "./components/ui/CreateContentModal";

const App = () => {
  const [modalOpen ,setModalOpen] = useState(false)
  return (
    <div className="p-4">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className="flex justify-end gap-3">
        <Button
          variant="primary"
          size="md"
          text="Share"
          startIcon={<ShareIcon size="md" />}
        />
        <Button
          variant="secondary"
          size="md"
          text="Add Content"
          startIcon={<PlusIcon size="md" />}
          onClick={()=>setModalOpen(true)}
        />
      </div>

      <div className="flex gap-4">
        <Card
          link="https://x.com/StaticRoutes/status/1960336205838688522"
          title="Harkirat👏🏻"
          type="twitter"
        />
        <Card
          link="https://www.youtube.com/watch?v=Co3jhNSkUK8"
          title="
Four years after IIT in Four Minutes"
          type="youtube"
        />
      </div>
    </div>
  );
};

export default App;
