import type { ReactElement } from "react";
import { BrainIcon } from "../icon/BrainIcon";

export const SidebarItem = ({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) => {
  return (
    <div className="flex items-center py-3.5 justify-start gap-5   font-normal text-slate-800 text-lg hover:bg-gray-200 hover:cursor-pointer rounded hover:transition-all duration-300">
      <div className="pl-1">{icon}</div>
      <div className="">{text}</div>
    </div>
  );
};
