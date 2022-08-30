import React, { useEffect } from "react";

import Layout from "./../../components/Layout/index";

export const MainHome = () => {
  useEffect(() => {
    document.title = "Voxcity | Main";
  }, []);

  return (
    <>
      <Layout />
    </>
  );
};
