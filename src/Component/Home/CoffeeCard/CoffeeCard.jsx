import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffeesCollection, coffeesCollection }) => {
  const {
    _id,
    name,
    chef,
    supplier,
    taste,
    category,
    details,
    photo,
    quantity,
    price,
  } = coffee;

  const handleDelete = (_id) => {
    console.log('delete', _id); 
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`https://coffee-store-server-uw3h.vercel.app/coffees/${_id}`,{
            method : "DELETE",
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                   Swal.fire({
            title: "Deleted Success !",
            text: "Your Coffee has been deleted.",
            icon: "success",
            iconColor: 'green'
          });
          const remainingCoffee = coffeesCollection.filter(coffee => coffee._id !== _id); 
          setCoffeesCollection(remainingCoffee);
          
         
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
      });
  }
  return (
    <div>
      <div className="grid grid-cols-3 bg-slate-700 rounded-md">
        <div>
          {/* <img src="src/assets/1.png" alt="" /> */}
          <img src={photo} alt="" />
        </div>
        <div className="col-span-2 flex w-full justify-between items-center p-4">
          <div className="">
            <p>
              {" "}
              <span className="font-bold">Name : </span> {name}
            </p>
            <p>
              {" "}
              <span className="font-bold">Supplier : </span> {supplier}
            </p>
            <p>
              {" "}
              <span className="font-bold">Price : </span> {price}
            </p>
            <p>
              {" "}
              <span className="font-bold">Quantity : </span> {quantity}
            </p>
          </div>
          <div className="flex flex-col justify-evenly h-full ">
            {/* view */}

            <button className=" px-5 rounded-sm btn text-2xl">
              <IoEyeOutline />
            </button>
            {/* edit  */}
           <Link to={`/updateCoffee/${_id}`}>
           <button className=" px-5 rounded-sm btn text-2xl btn-primary">
              <MdOutlineEdit />
            </button></Link>
            {/* delete  */}
            <button onClick={()=> handleDelete(_id)} className=" px-5 rounded-sm btn text-2xl btn-warning">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
