import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const AddFood = () => {

    const { user } = useContext(AuthContext);

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
        // console.log(name, quantity, photo, location, date, notes);

        const newFoods = { name, quantity, photo, location, date, notes, status: "available" }

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newFoods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                // reset form
                form.reset();
            })
    }

    return (
        <div className="py-24 md:w-2/3 mx-auto">
            <div className="px-5 md:px-0 text-center">
                <h2 className="text-3xl font-bold">Add a Foods</h2>
            </div>
            <form onSubmit={handleAddFood} className="card-body">
                {/* input food_name and food_quantity */}
                <div className="md:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Food Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Food Quantity" className="input input-bordered" required />
                    </div>
                </div>
                {/* input filed Photo_URL*/}
                <div className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Give me the Photo URL" className="input input-bordered" required />
                    </div>
                </div>
                {/* input pickup_location and expired_Date */}
                <div className="md:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Pickup Location" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Expired Date/Time</span>
                        </label>
                        <input type="date" name="date" placeholder="Expired Date/Time" className="input input-bordered" required />
                    </div>
                </div>
                {/* input filed Additional Notes */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <textarea name="notes" className="textarea textarea-bordered" placeholder="Give me details" required></textarea>
                    </div>
                </div>
                {/* input donator_name and donator_img,  */}
                <div className="md:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Donator Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Donator Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Donator Image</span>
                        </label>
                        <input type="text" defaultValue={user?.photoURL} placeholder="Donator Image URL" className="input input-bordered" required />
                    </div>
                </div>
                {/* input donator_email */}
                <div className="form-control flex-1">
                    <label className="label">
                        <span className="label-text">Donator Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} placeholder="Donator Email" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add a Food</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;