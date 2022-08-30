import React from "react";
import "./styles.css";
import Header from "../Header";
import UserList from "../UserList";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="Container">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}
