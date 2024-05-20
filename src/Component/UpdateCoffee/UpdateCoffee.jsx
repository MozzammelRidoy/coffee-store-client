import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const specificCoffee = useLoaderData(); 
    const {name, _id , chef, supplier, taste, category, details, photo , quantity, price} = specificCoffee; 
    
    const handleUpdateCoffee = (event) => {
        event.preventDefault(); 
        const form = new FormData(event.currentTarget); 
        const name = form.get('name'); 
        const chef = form.get('chef'); 
        const supplier = form.get('supplier'); 
        const taste = form.get('taste'); 
        const category = form.get('category'); 
        const details = form.get('category'); 
        const photo = form.get('photo'); 
        const quantity = form.get('quantity'); 
        const price = form.get('price');
        const coffee = {name, chef, supplier, taste, category, details, photo , quantity, price}; 
        console.log(coffee)

        fetch(`https://coffee-store-server-uw3h.vercel.app/coffees/${_id}`, {
            method : 'PUT',
            headers: {"content-type" : "application/json"},
            body : JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data); 
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "center",
                    
                    icon: "success",
                    iconColor: 'green',
                    title: "Coffee Successfully Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            else {
                Swal.fire({
                    title: "Update Failed !",
                    icon: "error",
                    iconColor: 'red',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
    return (
        <div>
                <div  className="px-24 py-12 bg-[#f4f3f0] ">
                <h2 className="text-4xl text-center  font-bold mb-6">Update Coffee Here</h2>
                <form onSubmit={handleUpdateCoffee}>

                    {/* name & chef  */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="name">Name</label>
                        <input defaultValue={name} name="name" type="text" placeholder="Enter Coffee Name" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="chef">Chef</label>
                        <input defaultValue={chef} name="chef" type="text" placeholder="Enter Coffee Chef" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>

                    {/* supplier & taste  */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="supplier">Supplier</label>
                        <input defaultValue={supplier} name="supplier" type="text" placeholder="Enter Coffee Supplier" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="teste">Teste</label>
                        <input defaultValue={taste} name="taste" type="text" placeholder="Enter Coffee Taste" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>

                    {/* Category & details  */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="category">Category</label>
                        <input defaultValue={category} name="category" type="text" placeholder="Enter Coffee Categroy" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="details">Details</label>
                        <input defaultValue={details} name="details" type="text" placeholder="Enter Coffee details" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>
                    {/* quantity and price */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="quantity">Quantity</label>
                        <input defaultValue={quantity} name="quantity" type="number" placeholder="Enter Coffee Quantity" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="price">Price</label>
                        <input defaultValue={price} name="price" type="number" placeholder="Enter Coffee Price" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>

                    {/* photo & button  */}
                    <div className="grid grid-cols-1 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="photo">Photo</label>
                        <input defaultValue={photo} name="photo" type="text" placeholder="Enter Photo url" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <input type="submit" className="btn btn-outline btn-accent rounded-sm  w-full" value={'Update Coffee'} />
                        </div>
                    </div>


                </form>

                </div>
        </div>
    );
};

export default UpdateCoffee;