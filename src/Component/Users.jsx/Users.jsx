import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers]  = useState(loadedUsers); 


  return (
    <div>
      <h2 className="text-4xl text-center">Users Here {loadedUsers.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl font-bold">
                <th>No</th>
                <th>Email</th>
                <th>Creation Time</th>
                <th>Last Log-in Time</th>
                <th>User ID</th>
                <th>Action</th>
              </tr>
            </thead>
           {
            users.map((user, index) => <User users={users} setUsers={setUsers} index={index+1}  user={user}></User>)
           }
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
