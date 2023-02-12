import React,{useState,useEffect} from "react";
import AdminLayout from "../Layout/Admin";

function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user_info = localStorage.getItem("user");
    // console.log(user_info)
    setUser(JSON.parse(user_info));
  }, []);

  return (
    <AdminLayout title={"Profile"}>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-40 flex items-center justify-center text-indigo-500">
                <img src={user.image} className="w-48 h-48 rounded-full" />
              </div>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {user.name}
              <span className="font-light text-gray-500"></span>
            </h1>
            <p className="font-light text-gray-600 mt-3">{user.email}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Profile;
