import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ManageFoodsRowUpdate = () => {

    const foodUpdated = useLoaderData();

    const handleManageFoodUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.name.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;

        const updateFood = { foodName, quantity, photo, location, date, notes}

        fetch(`https://food-sharing-server-omega.vercel.app/foods/${foodUpdated._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your food is updated!",
                        icon: "success"
                    });
                }
            })

    }


    return (
        <>
            <div className="py-28 md:w-2/3 mx-auto">
                {/* <-!----- add food top content ----> */}
                <div className="text-center">
                    <h3 className="font-bold text-lg">Add Food Update</h3>
                    <p className="py-4">You can change the add food data</p>
                </div>
                {/* <-!----- add food update form ----> */}
                <div>
                    <form onSubmit={handleManageFoodUpdate} className="card-body">
                        {/* input food_name and food_quantity */}
                        <div className="md:flex gap-5">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered" defaultValue={foodUpdated.foodName} required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Food Quantity" className="input input-bordered" defaultValue={foodUpdated.quantity} required />
                            </div>
                        </div>
                        {/* input filed Photo_URL*/}
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Give me the Photo URL" className="input input-bordered" defaultValue={foodUpdated.photo} required />
                            </div>
                        </div>
                        {/* input pickup_location and expired_Date */}
                        <div className="md:flex gap-5">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <input type="text" name="location" placeholder="Pickup Location" className="input input-bordered" defaultValue={foodUpdated.location} required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Expired Date/Time</span>
                                </label>
                                <input type="date" name="date" placeholder="Expired Date/Time" className="input input-bordered" defaultValue={foodUpdated.date} required />
                            </div>
                        </div>
                        {/* input filed Additional Notes */}
                        <div className="flex gap-5">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <textarea name="notes" className="textarea textarea-bordered" placeholder="Give me details" defaultValue={foodUpdated.notes} required></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary">Update Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ManageFoodsRowUpdate;



