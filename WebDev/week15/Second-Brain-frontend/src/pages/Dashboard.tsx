import { useEffect, useState } from "react";
import { PlusIcon } from "../components/icon/PlusIcon";
import { ShareIcon } from "../components/icon/ShareIcon";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,fetchContent} = useContent()

  useEffect(()=>{
    fetchContent()
  },[modalOpen])

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

        <div className="flex justify-between mt-1.5 mb-8">
          <h1 className="text-3xl font-bold">
            All Notes
          </h1>
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
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          {
            contents.map(({type,link,title,_id})=><Card link={link} type={type} title={title} _id={_id}/>)
          }
        </div>
      </div>
    </div>
  );
};

