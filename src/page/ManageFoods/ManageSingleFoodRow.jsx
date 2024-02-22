import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ManageSingleFoodRow = ({ manage, index, handleManageConfirm }) => {
    const { _id, photo, pickupLocation, email, phone, donationAmount, status, foodDonarEmail } = manage || {}

    const { user } = useContext(AuthContext)

    return (
        <tr className="border">
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{pickupLocation}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <th>{donationAmount} Tk</th>
            <th>
                {
                    foodDonarEmail === user?.email ?
                        <span>
                            {
                                status === 'confirm' ?
                                    <span className="text-green-500">Confirmed</span>
                                    :
                                    <span onClick={() => handleManageConfirm(_id)} className='cursor-pointer'>{status}</span>
                            }
                        </span>
                        :
                        <span className="bg-primary text-white p-1 rounded">Authority Power</span>
                }

            </th>
        </tr>
    );
};

export default ManageSingleFoodRow;