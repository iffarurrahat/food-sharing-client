import { Link } from "react-router-dom";

const FoodsCard = ({ food }) => {

    const { _id, name, photo, quantity, location, date, notes } = food;

    return (
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-md p-6">
            <div>
                <img src={photo} alt="" />
            </div>
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                    src={photo}
                    alt="tania andrew"
                    className="relative inline-block h-[50px] w-[50px] !rounded-full object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {name}
                        </h5>
                        <div className="flex items-center gap-0 5">
                            <p>{date}</p>
                        </div>
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        {location}
                    </p>
                </div>
            </div>
            <div className="p-0 mb-6">
                <p className="mb-3">Quantity: {quantity}</p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {notes.slice(0, 120)}...
                </p>
                <Link to={`/food/${_id}`}>
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 px-6 mt-8 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FoodsCard;