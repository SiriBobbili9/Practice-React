import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";

//customHoomk for fetching the data
const useFetchData = (resId) => {
  const [resInfo, setRestInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestInfo(json);
  };
  return resInfo;
};
export default useFetchData;
