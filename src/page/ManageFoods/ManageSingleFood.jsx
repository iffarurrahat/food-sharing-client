import ManageSingleFoodRow from "./ManageSingleFoodRow";
import Container from "../../components/ui/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ManageSingleFood = () => {

    const [manageFoods, setManageFoods] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://food-sharing-server-omega.vercel.app/manage/${id}`)
            .then(res => res.json())
            .then(data => {
                setManageFoods(data);
            });
    }, [id]);


    const handleManageConfirm = id => {
        fetch(`https://food-sharing-server-omega.vercel.app/manage/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirm" })
            // body: JSON.stringify(manageFoods.status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // updated status
                    const remaining = manageFoods.filter(manage => manage._id !== id);
                    const updated = manageFoods.find(manage => manage._id === id);
                    updated.status = "confirm"
                    const newManageFood = [updated, ...remaining]
                    setManageFoods(newManageFood)

                }
            })
    }



    return (
        <div className="pt-20">
            <Container>
                <div className="my-36">
                    <h2 className="text-2xl">Manage Single Food</h2>
                    <div className="py-10">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Pickup Location</th>
                                        <th>Request Email</th>
                                        <th>Request Phone</th>
                                        <th>Donation Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        manageFoods.map((manage, index) => <ManageSingleFoodRow
                                            key={index}
                                            index={index}
                                            manage={manage}
                                            handleManageConfirm={handleManageConfirm}
                                        ></ManageSingleFoodRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ManageSingleFood;