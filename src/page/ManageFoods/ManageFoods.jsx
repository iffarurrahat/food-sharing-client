import { useLoaderData } from "react-router-dom";
import Container from "../../components/ui/Container";
import ManageFoodsRow from "./ManageFoodsRow";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageFoods = () => {

    const foodDonorsList = useLoaderData();

    const [foodDonors, setFoodDonors] = useState(foodDonorsList)

    const handleDeleteFood = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this food 😧",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // data fetch
                fetch(`https://food-sharing-server-omega.vercel.app/foods/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted  🙂",
                                icon: "success"
                            });
                            // after request cancel/delete than ui remain data show
                            const remaining = foodDonors.filter(Donor => Donor._id !== id);
                            setFoodDonors(remaining);
                        }
                    })
            }
        });
    }



    return (
        <>
            {/* <-!----- react-hemet content-----> */}
            <Helmet>
                <title>Foodsa | Manage My Food</title>
            </Helmet>
            {/* <-!----- main content-----> */}
            <div className="pt-16">
                {/* <-!------- top content --------> */}
                <div className="bg-[url(https://i.ibb.co/QpqtPXv/manage-food.jpg)] h-[150px] md:h-[250px]">
                    <div className="h-full left-0 top-0 bg-gradient-to-r from-[#242323] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0'>
                            <p className='text-white text-2xl md:text-4xl font-extrabold pt-10 md:pt-20 text-center'>Manage Foods <br /> <span className='text-primary'>Collections</span></p>
                        </div>
                    </div>
                </div>
                {/* <-!------- main content --------> */}
                <div className="mb-20">
                    <Container>
                        <div className="py-10">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th>Id</th>
                                            <th>Donar Image</th>
                                            <th>Donar Name</th>
                                            <th>Donar Location</th>
                                            <th>Expired In Food</th>
                                            <th>Food Name</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                            <th>Manage Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            foodDonors.map((foodDonor, index) => <ManageFoodsRow
                                                key={index}
                                                index={index}
                                                foodDonor={foodDonor}
                                                handleDeleteFood={handleDeleteFood}
                                            ></ManageFoodsRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default ManageFoods;