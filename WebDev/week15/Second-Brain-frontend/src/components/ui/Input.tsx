export interface InputProp {
  ref ?: any
  placeholder: "Link" | "Title" | "Username" | "Password";
}

export const Input = ({ ref, placeholder }: InputProp) => {
  return (
    <input
      placeholder={placeholder}
      ref={ref}
      type="text"
      className="px-2 py-1 text-lg border-gray-400 border rounded-md"
    />
  );
};