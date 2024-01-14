import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Container from "../../components/ui/Container";
import FoodRequestRow from "./FoodRequestRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodRequest = () => {

    const [requests, setRequests] = useState([]);
    const { user } = useContext(AuthContext);

    // console.log(requests);

    const url = `http://localhost:5000/requests?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequests(data);
            })
    }, [url]);

    // handle func for FoodRequestRow
    const handleCancelRequest = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this 😧",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // data fetch
                fetch(`http://localhost:5000/requests/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your request has been canceled 🙂",
                                icon: "success"
                            });
                            // after request cancel/delete than ui remain data show
                            const remaining = requests.filter(request => request._id !== id);
                            setRequests(remaining);
                        }
                    })
            }
        });
    }



    return (
        <>
            {/* <-!----- react-hemet content-----> */}
            <Helmet>
                <title>Foodsa | My Food Request</title>
            </Helmet>
            {/* <-!----- main content-----> */}
            <div className="pt-16">
                {/* <-!------- top content --------> */}
                <div className="bg-[url(https://i.ibb.co/31P47pf/food-request.jpg)] object-cover h-[150px] md:h-[250px]">
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
                                            <th>Image</th>
                                            <th>Donar Name</th>
                                            <th>Pickup Location</th>
                                            <th>Expired In</th>
                                            <th>Donation Amount</th>
                                            <th>Status</th>
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            requests.map((request, index) => <FoodRequestRow
                                                key={index}
                                                index={index}
                                                request={request}
                                                handleCancelRequest={handleCancelRequest}
                                            ></FoodRequestRow>)
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

export default FoodRequest;

