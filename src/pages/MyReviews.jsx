import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { apiFetch } from '../hooks/api';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';



export default function MyReviews() {
  const { user } = useAuth();
  const [rows, setRows] = useState([]);

  const load = async () => {
    if (!user) return;
    const token = await user.getIdToken();
    const data = await apiFetch('/my-reviews', { token });
    setRows(data); 
  };

  useEffect(() => {
    load(); 
  }, [user]);

  const del = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const token = await user.getIdToken();
        await apiFetch(`/reviews/${id}`, { method: 'DELETE', token });

        load(); 
        Swal.fire({
          title: 'Deleted!',
          text: 'Your review has been deleted.',
          icon: 'success',
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an issue deleting your review.',
          icon: 'error',
        });
      }
    }
  };

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
                My Reviews
              </button>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-3xl mb-5 mt-5 font-bold container mx-auto">
        My Reviews : {rows.length}
      </h1>
      <div className="container mb-32  m-auto overflow-x-auto">
        <table className="w-full text-sm rounded-t-2xl overflow-hidden">
          <thead className="bg-[#f43098] text-white">
            <tr className="text-left border-b">
              <th className="p-2">Image</th>
              <th className="p-2">Food</th>
              <th className="p-2">Restaurant</th>
              <th className="p-2">Posted</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#ffffff] shadow-xl">
            {rows.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No reviews available
                </td>
              </tr>
            ) : (
              rows.map(r => (
                <tr key={r._id} className="border-b">
                  <td className="p-2">
                    <img
                      src={r.photoUrl}
                      className="w-16 h-12 object-cover rounded"
                      alt={r.foodName}
                    />
                  </td>
                  <td className="p-2">{r.foodName}</td>
                  <td className="p-2">{r.restaurantName}</td>
                  <td className="p-2">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-2 flex mt-3 items-center gap-5">
                    <Link
                      to={`/edit/${r._id}`}
                      className="flex-col md:underline flex items-center gap-1 text-red-500"
                    >
                      Edit <BiEdit />
                    </Link>
                    <button
                      onClick={() => del(r._id)}
                      className="flex-col md:underline flex items-center gap-1 text-red-500"
                    >
                      Delete <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
