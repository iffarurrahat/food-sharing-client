import { useContext } from "react";
import Container from "../ui/Container";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodCardDetails = () => {

    const food = useLoaderData();
    // console.log('single food:', food);

    const { foodName, location, photo, notes, quantity, userName, date, userPhoto: foodDonarPhoto, userName: foodDonarName, _id, email: foodDonarEmail, status } = food || {}
    const { user } = useContext(AuthContext);

    // console.log('food donarId id:', foodDonarId);
    // console.log('food donarId email:', foodDonarEmail);

    const handleFoodRequest = event => {
        event.preventDefault();

        const form = event.target;
        const phone = form.phone.value;
        const money = form.money.value;
        const comment = form.comment.value;
        const email = user?.email;


        const requested = {
            foodName,
            foodDonarId: _id,
            donarName: userName,
            foodDonarEmail,
            pickupLocation: location,
            expiredDate: date,
            status,
            donationAmount: money,
            phone,
            comment,
            email,
            photo,
        }

        // console.log(requested);

        fetch('http://localhost:5000/requests', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requested)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    // request delivered alert
                    Swal.fire({
                        title: "Good job!",
                        text: "You request successful!",
                        icon: "success"
                    });
                    //reset form
                    form.reset();
                }
            })

    }

    return (
        <>
            {/* <-!----- react-hemet content-----> */}
            <Helmet>
                <title>{`Foodsa | ${foodName}`}</title>
            </Helmet>
            {/* <-!----- main content-----> */}
            <div className="py-24">
                <Container>
                    <img src={photo} alt="" className="mb-4 mx-auto w-full md:h-[450px] object-cover" />
                    <div className="bg-slate-100 p-4">
                        <img className="h-40" src={foodDonarPhoto} alt="" />
                        <h4 className="font-bold my-2">Donar Name: {foodDonarName}</h4>
                        <h4 className="text-2xl font-bold mb-2">Food Name: {foodName}</h4>
                        <p className="font-bold py-1">Location: {location}</p>
                        <p className="font-bold py-1">Quantity: {quantity}</p>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">{notes}</p>
                        <button
                            onClick={() => document.getElementById('my_modal_1').showModal()}
                            className="py-3 px-4 bg-primary text-white rounded">Request for Food</button>
                        {/* <-!----- modal_box start ----> */}
                        <dialog id="my_modal_1" className="modal z-0">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{foodName}</h3>
                                <p className="py-4">If you need food than you can fill up it.</p>
                                <div className="">
                                    <form onSubmit={handleFoodRequest} method="dialog">
                                        <textarea name="comment" className="textarea textarea-bordered h-24 w-full" placeholder="Why you need to food, write something about it"></textarea> <br />
                                        <input type="text" name="phone" placeholder="Your Number" className="input input-bordered w-full mt-3" />
                                        <input type="text" name="money" placeholder="You can donate some money" className="input input-bordered w-full mt-3" />
                                        <br />
                                        <input className="btn bg-secondary text-white mt-5" type="submit" value="Submit" />
                                    </form>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500 hover:text-white">✕</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        {/* <-!----- modal_box end ----> */}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default FoodCardDetails;



