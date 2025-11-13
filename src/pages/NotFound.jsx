import { Link } from "react-router";
import { IoArrowBackCircleSharp } from 'react-icons/io5';


export default function NotFound() {
  return (
    <div className="text-center py-20">
      <img
        alt="Not found"
        className="mx-auto mb-6 w-2xl rounded-2xl"
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
      />
      <h2 className="text-3xl bg-gradient-to-r from-[#ef48a1] to-[#d82d88] bg-clip-text text-transparent font-semibold mb-2">
        Oops — page not found
      </h2>
      <Link
        to="/"
        className="btn btn-outline border-1 mt-3.5 border-[#f43098] text-[#f43098] rounded-2xl p-2.5"
      >
        Back to Home <IoArrowBackCircleSharp className="inline ml-2 text-lg" />
      </Link>
    </div>
  );
}
