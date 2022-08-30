import React from "react";
import AddUser from "../AddUser";
import "./styles.css";
import { useAxios } from "../../hooks/useAxios";

export default function VideoList() {
  const { data } = useAxios(`users`);

  return (
    <div className="Container">
      <ul className="UserListWrapper">
        {data?.users.map((user) => (
          <AddUser />
        ))}
        <Adduser />
      </ul>
    </div>
  );
}
