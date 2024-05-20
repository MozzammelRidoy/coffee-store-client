import React from "react";
import Swal from "sweetalert2";

const User = ({ user, index, setUsers, users }) => {
  console.log(user);
  const {email, creationTime, lastSignInTime , _id} = user; 
  const handleDelete = _id => {


    fetch(`https://coffee-store-server-uw3h.vercel.app/users/${_id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
               Swal.fire({
        title: "Deleted Success !",
        text: "User has been Deleted.",
        icon: "success",
        showCancelButton: false,
        iconColor: 'green'
      });
      const remainingUsers = users.filter(user => user._id !== _id); 
      setUsers(remainingUsers)
      
     
    }

    else {
        Swal.fire({
            title: "Delete Failed !",
            icon: "error",
            iconColor: 'red',
            showConfirmButton: false,
            timer: 1500
          });
    }
    })
   

    }


  return (
   
      <tbody>
              {/* row 1 */}
              <tr>
                <th>{index}</th>
                <td>{email}</td>
                <td>{creationTime}</td>
                <td>{lastSignInTime}</td>
                <td>{_id}</td>
                <td><button onClick={()=> handleDelete(_id)} className="btn btn-warning">Delete</button></td>
              </tr>
            </tbody>
   
  );
};

export default User;
