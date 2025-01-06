import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check online condition by addeventlistener and return status
  //make offline be networktab throttling to offline
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
