import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { apiFetch } from '../lib/api';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

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
    <div className="container p-4 m-auto overflow-x-auto">
      <h1 className="text-3xl mb-3 font-bold">My Reviews : {rows.length}</h1>
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
                  <Link to={`/edit/${r._id}`} className="underline">
                    Edit
                  </Link>
                  <button
                    onClick={() => del(r._id)}
                    className="underline text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
