import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffeesCollection = useLoaderData(); 
    const [coffeesCollection, setCoffeesCollection] = useState(loadedCoffeesCollection); 

    return (
        <div>
                <h2 className="text-4xl text-center">Hot Hot Could Coffee {coffeesCollection.length}</h2>
                <div className="grid grid-cols-2 gap-4 my-8 p-10">
                    {
                        coffeesCollection.map(coffee => <CoffeeCard key={coffee._id} coffeesCollection={coffeesCollection} setCoffeesCollection={setCoffeesCollection} coffee={coffee}></CoffeeCard>)
                    }
                </div>
        </div>
    );
};

export default Home;