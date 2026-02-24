import axios from "axios";
import { DeleteIcon } from "../icon/DeleteIcon";
import { FileIcon } from "../icon/FileIcon";
import { ShareIcon } from "../icon/ShareIcon";
import { BACKEND_URL } from "../../config";
import { useContent } from "../../hooks/useContent";

interface CardProps {
  type: "youtube" | "twitter";
  link: string;
  title: string;
  _id?: string;
}

export const Card = ({ type, link, title, _id }: CardProps) => {
  const { fetchContent,setContents } = useContent();

  const deleteContent = async () => {
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
      data: {
        contentId: _id,
      },
      headers: {
        Authorization: "Bearer "+ localStorage.getItem("token"),
      },
    });

    setContents(prev=>prev.filter((item:any)=>item._id !== _id))
    fetchContent()
  };

  return (
    <div>
      <div className="max-w-72 rounded-md inset-shadow-xs p-4 border-gray-400 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0">
            <div className="text-gray-500">
              <FileIcon />
            </div>
            <div className="text-base">{title}</div>
          </div>
          <div className="flex text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon size="md" />
            </a>
            <div onClick={deleteContent}>
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link
                .split("&")[0]
                .replace("watch", "embed")
                .replace("?v=", "/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet min-h-120 min-w-92">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
