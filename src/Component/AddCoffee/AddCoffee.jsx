import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
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

        fetch('https://coffee-store-server-uw3h.vercel.app/coffees', {
            method : 'POST',
            headers: {"content-type" : "application/json"},
            body : JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data); 
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    
                    icon: "success",
                    iconColor: 'green',
                    title: "Coffee Successfully Added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
    return (
        <div>
                <div  className="px-24 py-12 bg-[#f4f3f0] ">
                <h2 className="text-4xl text-center  font-bold mb-6">Add Coffee Here</h2>
                <form onSubmit={handleAddCoffee}>

                    {/* name & chef  */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="name">Name</label>
                        <input name="name" type="text" placeholder="Enter Coffee Name" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="chef">Chef</label>
                        <input name="chef" type="text" placeholder="Enter Coffee Chef" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>

                    {/* supplier & taste  */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="supplier">Supplier</label>
                        <input name="supplier" type="text" placeholder="Enter Coffee Supplier" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="teste">Teste</label>
                        <input name="taste" type="text" placeholder="Enter Coffee Taste" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>

                    {/* Category & details  */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="category">Category</label>
                        <input name="category" type="text" placeholder="Enter Coffee Categroy" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="details">Details</label>
                        <input name="details" type="text" placeholder="Enter Coffee details" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>
                    {/* quantity and price */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="quantity">Quantity</label>
                        <input name="quantity" type="number" placeholder="Enter Coffee Quantity" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <label className="text-xl" htmlFor="price">Price</label>
                        <input name="price" type="number" placeholder="Enter Coffee Price" className="input input-bordered rounded-sm input-accent w-full" />
                        </div>
                    </div>

                    {/* photo & button  */}
                    <div className="grid grid-cols-1 gap-8 mb-6">
                        <div>
                            <label className="text-xl" htmlFor="photo">Photo</label>
                        <input name="photo" type="text" placeholder="Enter Photo url" className="input input-bordered input-accent rounded-sm w-full " />
                        </div>
                        <div>
                        <input type="submit" className="btn btn-outline btn-accent rounded-sm  w-full" value={'Add Coffee'} />
                        </div>
                    </div>


                </form>

                </div>
        </div>
    );
};

export default AddCoffee;