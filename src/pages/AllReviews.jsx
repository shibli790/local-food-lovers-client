import { useEffect, useState } from "react";
import { apiFetch } from "../lib/api";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router";
import { FaCircleArrowRight } from 'react-icons/fa6';


export default function AllReviews() {
  const [items, setItems] = useState([]);
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    apiFetch(`/reviews?search=${encodeURIComponent(search)}`)
      .then((d) => setItems(d.items))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const favorite = async (id) => {
    if (!user) return toast.error("Login to favorite");
    const token = await user.getIdToken();
    await apiFetch(`/favorites/${id}`, { method: "POST", token });
    toast.success("Added to favorites");
  };

  return (
    <div className="space-y-4 container mx-auto p-4">
      <div className=" flex gap-2">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by food name..."
          className="border-1 border-[#ff10a3] px-3 py-2 rounded-2xl w-full"
        />
        <button
          onClick={load}
          className="btn btn-outline  border-1 border-[#f43098] text-[#f43098] rounded-2xl p-2.5"
        >
          Search
        </button>
      </div>
      <h1 className="text-3xl mb-3 font-bold  ">
        All Reviws : {items.length}{' '}
      </h1>
      {loading ? (
        <div className="flex justify-center flex-col items-center text-3xl text-[#f43098]  gap-6">
          <span className="loading loading-spinner text-8xl text-secondary"></span>
          <div>Loading...</div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(r => (
            <div
              key={r._id}
              className="card bg-base-100 shadow-xl border border-gray-200 flex flex-col"
            >
              <img
                src={r.photoUrl}
                alt={r.foodName}
                className=" h-70 w-full p-2 rounded-2xl object-cover"
              />
              <div className="p-3 flex-1">
                <div className="font-bold text-2xl">
                  {' '}
                  Food Name : {r.foodName}
                </div>
                <div className="text-sm opacity-80 ">
                  RestaurantName : {r.restaurantName}{' '}
                  <div> RestaurantLocation : {r.location}</div>
                </div>
                <div className="text-sm mt-1">⭐ {r.rating}</div>
              </div>
              <div className="p-3 space-y-2">
                <button
                  onClick={() => favorite(r._id)}
                  className="btn btn-outline w-full  border-1 border-[#f43098] text-[#f43098] rounded-2xl p-2.5"
                >
                  ❤ Favorite
                </button>
                <Link
                  to={`/reviewdetails/${r._id}`}
                  className="btn btn-outline flex items-center gap-2 w-full border-1 border-[#f43098] text-[#f43098] rounded-2xl p-2.5"
                >
                  <span>View Details</span> <FaCircleArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
