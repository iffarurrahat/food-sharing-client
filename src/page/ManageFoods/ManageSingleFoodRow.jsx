
const ManageSingleFoodRow = ({ manage, index, handleManageConfirm }) => {
    const { _id, photo, pickupLocation, email, phone, donationAmount, status } = manage || {}
    // console.log(manage);

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
                    status === 'confirm' ?
                        <span className="text-green-500">Confirmed</span>
                        :
                        <span onClick={() => handleManageConfirm(_id)} className='cursor-pointer'>{status}</span>
                }
            </th>
        </tr>
    );
};

export default ManageSingleFoodRow;