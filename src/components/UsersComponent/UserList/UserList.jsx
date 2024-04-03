import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../constant/userDummy";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./UserList.css";
import { Delete, Visibility } from "@mui/icons-material";
import { useFetchUser } from "../../../utils/hook/UserAPI";
import React from "react";

const UserList = () => {
  const [data, setData] = useState(userRows);
  const { userData, userLoading } = useFetchUser();

  const dataWithId = userData.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "",
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <Visibility />
            </Link>
            <div onClick={() => handleDelete(params.row.id)}>
              <Delete className="text-red-500" />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="p-[20px]">
      <div className="datatableTitle">
        <div className="flex gap-5 items-center w-[50%]">
          <p className="text-[24px] text-gray-500 w-full">Add New User</p>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 w-full outline-none border-gray-700 rounded-lg"
          />
        </div>

        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={dataWithId}
        columns={userColumns.concat(actionColumn)}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
