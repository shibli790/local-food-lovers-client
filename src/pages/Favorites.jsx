import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { apiFetch } from '../lib/api';
import { SlLocationPin } from 'react-icons/sl';

export default function Favorites() {
  const { user } = useAuth();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (!user) return;
    setLoading(true); // Set loading to true when starting to fetch data
    user.getIdToken().then(token =>
      apiFetch('/my-favorites', { token }).then(data => {
        setRows(data);
        setLoading(false); // Set loading to false after data is fetched
      })
    );
  }, [user]);

  return (
    <>
      <h1 className="text-3xl mb-3 font-bold container mx-auto mt-4">
        My Favorite Bites : {rows.length}
      </h1>

      {loading ? (
        <div className="">
        </div>
      ) : (
        <div className="grid container mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4">
          {rows.map((f, i) => (
            <div key={i} className="border rounded-2xl overflow-hidden">
              <img
                src={f.review.photoUrl}
                className="h-40 w-full object-cover"
              />
              <div className="p-3">
                <div className="font-bold text-2xl">
                  Food Name: {f.review.foodName}
                </div>
                <div className="text-sm opacity-80">
                  Restaurant Name: {f.review.restaurantName}
                  <div className="flex items-center gap-2">
                    <SlLocationPin className="inline text-sm" />
                    Restaurant Location: {f.review.location}
                  </div>
                </div>
                <div className="text-sm flex items-center justify-between gap-2">
                  Review By: {f.review.reviewerName}
                  <div>Rating: ⭐ {f.review.rating}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
