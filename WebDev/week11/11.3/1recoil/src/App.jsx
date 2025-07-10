import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from "./store/atoms/atmo";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

//home, my network , jobs , messaging,notifications
//network,jobs ,notification , messaging
const MainApp = () => {
  const networkNotification = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notficationAtomCount = useRecoilValue(notificationAtom)
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom)
  return (
    <div>
      <button>Home</button>
      <button>
        My network ({networkNotification >= 100 ? "99+" : networkNotification})
      </button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>Notification ({notficationAtomCount >= 100 ? "99+" : notficationAtomCount})</button>
      <button>Messaging ({messagingAtomCount >= 100 ? "99+" : messagingAtomCount})</button>
      <br />
      <br />
      <button onClick={()=>setMessagingAtomCount(cnt=>cnt+1)}>Update Message</button>
    </div>
  );
};

export default App;
