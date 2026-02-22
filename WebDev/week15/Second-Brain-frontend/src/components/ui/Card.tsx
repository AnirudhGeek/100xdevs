import { DeleteIcon } from "../icon/DeleteIcon";
import { FileIcon } from "../icon/FileIcon";
import { ShareIcon } from "../icon/ShareIcon";

interface CardProps {
  type: "youtube" | "twitter";
  link: string;
  title: string;
}

export const Card = ({ type, link, title }: CardProps) => {
  return (
    <div>
      <div className="max-w-72 rounded-md inset-shadow-xs p-4 border-gray-400 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0">
            <div className="text-gray-500">
              <FileIcon/>
            </div>
            <div className="text-base">{title}</div>
          </div>
          <div className="flex text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon size="md" />
            </a>
            <DeleteIcon />
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet min-h-120 min-w-72">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
