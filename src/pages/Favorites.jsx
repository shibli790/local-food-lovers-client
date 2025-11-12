import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { apiFetch } from '../hooks/api';
import { SlLocationPin } from 'react-icons/sl';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { GrUserManager } from 'react-icons/gr';


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
          className="relative bg-cover bg-center h-72 sm:h-80 md:h-96 lg:h-[400px]"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/3mB5nW0B/Black-and-Orange-Restaurant-Fast-Food-Facebook-Cover.png")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-white space-y-4 py-16 sm:py-24 md:py-32">
            <div className="text-center px-4 sm:px-8 md:px-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Local Food Lovers Network
              </h1>
              <p className="text-base sm:text-lg opacity-80 mt-4">
                Explore the best food and reviews from our community!
              </p>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition mt-4">
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
                <div className="flex items-center gap-2">
                  <SiHomeassistantcommunitystore />
                  Restaurant Name : {f.review.restaurantName}
                </div>

                <div className="flex items-center gap-2">
                  <SlLocationPin className="inline text-sm " />
                  Restaurant Location : {f.review.location}
                </div>
                <div className="text-sm flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GrUserManager />
                    Review By Name : {f.review.reviewerName}{' '}
                  </div>
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
