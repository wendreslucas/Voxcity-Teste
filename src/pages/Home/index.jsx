import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "Voxcity | Home";
  }, []);

  return <>Home</>;
};
