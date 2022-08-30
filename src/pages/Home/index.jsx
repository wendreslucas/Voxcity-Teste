import { useEffect } from "react";
import { HomePage } from "./../../components/HomePage/index";

export const Home = () => {
  useEffect(() => {
    document.title = "Voxcity | Home";
  }, []);

  return <HomePage />;
};
