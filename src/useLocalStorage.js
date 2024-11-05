import { useEffect, useState } from "react";

export const useLocalStorage = ({ key, initial }) => {
  key = "wishlist" + key;
  const storedData = localStorage.getItem(key);
  const [data, setData] = useState(JSON.parse(storedData) ?? initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};