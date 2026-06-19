

import { TextInput } from "@repo/ui/text-input";

export default function Chat() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding:50,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div>
        chat room
      </div>
      <div>
        <TextInput size="big" placeholder="chat here..."></TextInput>
      </div>
    </div>
  );
}
