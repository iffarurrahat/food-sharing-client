import { GiCancel } from "react-icons/gi";
import { MdBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";


const ManageFoodsRow = ({ foodDonor, index, handleDeleteFood }) => {

    const { _id, userName: donorName, userPhoto: donorPhoto, foodName, location, date } = foodDonor || {}

    // console.log(foodDonor);



    return (
        <tr className="border">
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12">
                            <img src={donorPhoto} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{donorName}</td>
            <td>{location}</td>
            <td>{date}</td>
            <td>{foodName}</td>
            <th>
                <Link to={`/managefoodupdate/${_id}`}>
                    <MdBrowserUpdated className="h-5 w-5 text-blue-500 cursor-pointer" />
                </Link>
            </th>
            <th><span onClick={() => handleDeleteFood(_id)}><GiCancel className="h-5 w-5 text-red-500 cursor-pointer" /></span> </th>
            <th><button className="btn btn-ghost btn-xs">Manage</button></th>
        </tr>
    );
};

export default ManageFoodsRow;
