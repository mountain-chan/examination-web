import "./Admin.css";
import { callApi } from "../utils";
import { rest } from "../config";
import { useEffect, useState } from "react";
import { CDataTable } from "@coreui/react";

const Admin: React.FC = (props) => {
  const getUsers = async () => {
    const response: any = await callApi({
      api: rest.getAllUsers(1, 10),
      method: "get",
    });
    const { status, data } = response;

    if (status) return setUsers(data?.users);

    alert("Backend Failed");
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const columns = ["email", "name"];

  return (
    <div>
      <CDataTable
        items={users}
        fields={columns}
        // loading={users.loading}
        noItemsViewSlot={"noItems"}
        hover
        striped
        // scopedSlots={renderFields(fields)}
      />
    </div>
  );
};

export default Admin;
