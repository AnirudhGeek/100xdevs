import { useRef, useState } from "react";
import { CrossIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useContent } from "../../hooks/useContent";

interface ContentModelProp {
  open: boolean;
  onClose: () => void;
}

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export const CreateContentModal = ({ open, onClose }: ContentModelProp) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const {fetchContent} = useContent()
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    console.log(title)
    console.log(link)

    console.log(localStorage.getItem("token"))

    await axios.post(`${BACKEND_URL}/api/v1/content`,{
      title,
      link,
      type
    },{
      headers : {
        "Authorization" :"Bearer " + localStorage.getItem("token")
      }
    })

    fetchContent()
    onClose()

  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-500 opacity-40"
      />

      {/* Modal */}
      <div className="relative bg-white text-black p-6 rounded-xl shadow-lg w-96 opacity-100 z-10">
        <div onClick={onClose} className="flex justify-end pb-4 cursor-pointer">
          <CrossIcon />
        </div>

        <div className="flex flex-col gap-4">
          <Input ref={titleRef} placeholder="Title" />
          <Input ref={linkRef} placeholder="Link" />
        </div>

        <div className="pt-3">
          <div className="flex items-center justify-evenly">
          <h1 className="font-medium text-lg">Type</h1>
            <Button
              size="md"
              text="Youtube"
              variant={type === ContentType.Youtube ? "secondary" : "primary"}
              onClick={() => setType(ContentType.Youtube)}
            />
            <Button
              size="md"
              text="Twitter"
              variant={type === ContentType.Twitter ? "secondary" : "primary"}
              onClick={() => setType(ContentType.Twitter)}
            />
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Button
            onClick={addContent}
            text="Submit"
            size="md"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};
