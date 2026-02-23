import { BrainIcon } from "../icon/BrainIcon"
import { DocumentIcon } from "../icon/DocumentIcon"
import { HashIcon } from "../icon/HashIcon"
import { LinkIcon } from "../icon/LinkIcon"
import { TwitterIcon } from "../icon/TwitterIcon"
import { YoutubeIcon } from "../icon/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"


export const Sidebar = ()=>{
    return (
        <div className="bg-white min-w-64 pt-2  min-h-full border-r-2 border-gray-200 fixed left-0">
            <div className="flex items-center text-3xl pl-4 font-medium text-purple-500 gap-3 justify-start pb-10">
                <BrainIcon/>
                <h1 className="text-black">
                    Brainly
                    </h1>
            </div>
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
            <SidebarItem text="Documents" icon={<DocumentIcon/>}/>
            <SidebarItem text="Links" icon={<LinkIcon/>}/>
            <SidebarItem text="Tags" icon={<HashIcon/>}/>
        </div>
    )
}