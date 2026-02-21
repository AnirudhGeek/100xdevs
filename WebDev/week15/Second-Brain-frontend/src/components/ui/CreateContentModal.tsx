import { CrossIcon } from "../icon/CrossIcon";
import { Button } from "./Button";

interface ContentModelProp {
    open : boolean,
    onClose : ()=>void
}

export const CreateContentModal = ({ open, onClose }:ContentModelProp) => {
  return (
    <div>
      {open && (
        <div className="w-full fixed top-0 left-0 opacity-40 h-full bg-slate-500 text-black flex justify-center items-center">
          <div className=" bg-red-50 text-black p-4 rounded-lg">
            <div onClick={onClose} className="flex justify-end pb-4 hover:cursor-pointer">
              <CrossIcon />
            </div>
            <div className="flex flex-col gap-4 ">
              <Input placeholder="Link" />
              <Input placeholder="Title" />
            </div>
            <div className="flex justify-center pt-4">

              <Button text="Submit" size="md" variant="secondary"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface InputProp {
  onChange: () => void;
  placeholder: "Link" | "Title";
}

const Input = ({ onChange, placeholder }: InputProp) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      type="text"
      className="px-2 text-base py-1 border rounded-md"
    />
  );
};
