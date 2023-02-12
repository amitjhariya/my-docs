import React from "react";
import AdminLayout from "../Layout/Admin";
import Files from "./Files";


function Dashboard() {

  return (
    <AdminLayout title={"Dashboard"}>
      
      <Files/>
    </AdminLayout>
  );
}

export default Dashboard;
