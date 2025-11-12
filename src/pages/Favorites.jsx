import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { apiFetch } from '../lib/api';
import { SlLocationPin } from 'react-icons/sl';

export default function Favorites() {
  const { user } = useAuth();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (!user) return;
    setLoading(true); 
    user.getIdToken().then(token =>
      apiFetch('/my-favorites', { token }).then(data => {
        setRows(data);
        setLoading(false); 
      })
    );
  }, [user]);

  return (
    <>
      <section>
        <div
          className="relative bg-cover bg-center h-72"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/3mB5nW0B/Black-and-Orange-Restaurant-Fast-Food-Facebook-Cover.png")',
          }}
        >
          <div className="absolute inset-0 "></div>
          <div className="relative z-10 flex justify-around    text-white space-y-4 py-16">
            <div></div>
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold">Local Food Lovers Network</h1>
              <p className="text-lg opacity-80">
                Explore the best food all reviews from our community!
              </p>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition">
                My Favorite Bites
              </button>
            </div>
          </div>
        </div>
      </section>

      <h1 className="text-3xl mb-3 font-bold container mx-auto mt-4">
        My Favorite Bites : {rows.length}
      </h1>

      {loading ? (
        <div className=""></div>
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
