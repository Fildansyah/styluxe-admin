import React from "react";
import { Sidebar, UserList } from "../../components";

const Users = () => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="flex-[9]">
        <UserList />
      </div>
    </div>
  );
};

export default Users;
