import PropTypes from 'prop-types';
import { GiCancel } from "react-icons/gi";


const FoodRequestRow = ({ request, index, handleCancelRequest }) => {
    const { _id, donarName, pickupLocation, expiredDate, donationAmount, photo, status } = request || {}
    // console.log('Food request booking:', request);


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
            <td>{donarName}</td>
            <td>{pickupLocation}</td>
            <td>{expiredDate}</td>
            <td>{donationAmount} Tk</td>

            <td>
                {
                    status === 'confirm' ?
                        <span className="text-green-500">Confirmed</span>
                        :
                        <span className='cursor-pointer'>{status}</span>
                }
            </td>
            {/* <th>{status}</th> */}

            <th><span onClick={() => handleCancelRequest(_id)}><GiCancel className="h-5 w-5 text-red-500 cursor-pointer" /></span> </th>
        </tr>
    );
};



FoodRequestRow.propTypes = {
    request: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleCancelRequest: PropTypes.func.isRequired,
};
export default FoodRequestRow;
