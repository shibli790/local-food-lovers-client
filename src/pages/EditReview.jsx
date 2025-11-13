import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { apiFetch } from '../hooks/api';
import { useAuth } from '../context/AuthProvider';
import { toast } from 'react-toastify';

export default function EditReview() {
  const { user } = useAuth();
  const nav = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    apiFetch(`/reviews/${id}`).then(d =>
      
      setForm(d.r));
    
  }, [id]);
  // console.log(form);
  

  if (!form) return (
    <div className="flex justify-center mt-6 flex-col items-center text-3xl text-[#f43098]  gap-4">
      <span className="loading loading-spinner text-8xl  text-secondary"></span>
      <div>Loading...</div>
    </div>
  );

  const submit = async e => {
    e.preventDefault();
    const token = await user.getIdToken();
    await apiFetch(`/reviews/${id}`, {
      method: 'PUT',
      token,
      body: { ...form, rating: Number(form.rating) },
    });
    toast.success('Updated');
    nav('/my-reviews');
  };


  return (
    <section className="flex min-h-screen justify-center items-center  ">
      <form
        onSubmit={submit}
        className="w-full max-w-2xl  p-8   bg-[#fff] rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl text-center my-5 md:text-5xl  bg-gradient-to-r from-[#ef48a1] to-[#d82d88] bg-clip-text text-transparent font-extrabold">
          Edit My Review
        </h2>

        <div>
          <label
            htmlFor="foodName"
            className="block text-black font-medium mb-2"
          >
            Food Name
          </label>
          <input
            id="foodName"
            required
            placeholder="Food Name"
            className="border px-4 py-2 w-full rounded-md focus:ring-2"
            value={form.foodName}
            onChange={e => setForm({ ...form, foodName: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="photoUrl"
            className="block text-black font-medium mb-2"
          >
            Food Image URL
          </label>
          <input
            id="photoUrl"
            required
            placeholder="Food Image URL"
            className="border px-4 py-2 w-full rounded-md focus:ring-2"
            value={form.photoUrl}
            onChange={e => setForm({ ...form, photoUrl: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="restaurantName"
            className="block text-black font-medium mb-2"
          >
            Restaurant Name
          </label>
          <input
            id="restaurantName"
            required
            placeholder="Restaurant Name"
            className="border px-4 py-2 w-full rounded-md focus:ring-2"
            value={form.restaurantName}
            onChange={e => setForm({ ...form, restaurantName: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-black font-medium mb-2"
          >
            Location
          </label>
          <input
            id="location"
            required
            placeholder="Location"
            className="border px-4 py-2 w-full rounded-md focus:ring-2"
            value={form.location}
            onChange={e => setForm({ ...form, location: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-black font-medium mb-2">
            Star Rating (1-5)
          </label>
          <input
            id="rating"
            required
            type="number"
            min="1"
            max="5"
            placeholder="Star Rating (1-5)"
            className="border px-4 py-2 w-full rounded-md focus:ring-2 "
            value={form.rating}
            onChange={e => setForm({ ...form, rating: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="reviewText"
            className="block text-black font-medium mb-2"
          >
            Review Text
          </label>
          <textarea
            id="reviewText"
            required
            placeholder="Review Text"
            className="border px-4 py-2 w-full rounded-md focus:ring-2 "
            value={form.reviewText}
            onChange={e => setForm({ ...form, reviewText: e.target.value })}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="btn bg-[#f43098] rounded-2xl text-white w-full hover:bg-[#ca2c80] focus:outline-none "
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}