import { apiFetch } from '../lib/api';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthProvider';

export default function AddReview() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false); // Set loading state to false initially
  const nav = useNavigate();
  const [form, setForm] = useState({
    foodName: '',
    photoUrl: '',
    restaurantName: '',
    location: '',
    rating: 5,
    reviewText: '',
  });

  const submit = async e => {
    e.preventDefault();
    if (!user) return toast.error('Login required');

    setLoading(true); // Set loading to true when starting submission

    const token = await user.getIdToken();
    try {
      await apiFetch('/reviews', {
        method: 'POST',
        token,
        body: { ...form, rating: Number(form.rating) },
      });
      toast.success('Review added');
      nav('/my-reviews');
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  return (
    <div className="max-w-md mx-auto mt-32 card bg-base-100 w-full p-5 shrink-0 shadow-2xl">
      <form onSubmit={submit} className="grid gap-3 max-w-xl">
        <input
          required
          placeholder="Food Name"
          className="border px-3 py-2 rounded"
          value={form.foodName}
          onChange={e => setForm({ ...form, foodName: e.target.value })}
        />
        <input
          required
          placeholder="Food Image URL"
          className="border px-3 py-2 rounded"
          value={form.photoUrl}
          onChange={e => setForm({ ...form, photoUrl: e.target.value })}
        />
        <input
          required
          placeholder="Restaurant Name"
          className="border px-3 py-2 rounded"
          value={form.restaurantName}
          onChange={e => setForm({ ...form, restaurantName: e.target.value })}
        />
        <input
          required
          placeholder="Location"
          className="border px-3 py-2 rounded"
          value={form.location}
          onChange={e => setForm({ ...form, location: e.target.value })}
        />
        <input
          required
          type="number"
          min="1"
          max="5"
          placeholder="Star Rating (1-5)"
          className="border px-3 py-2 rounded"
          value={form.rating}
          onChange={e => setForm({ ...form, rating: e.target.value })}
        />
        <textarea
          required
          placeholder="Review Text"
          className="border px-3 py-2 rounded"
          value={form.reviewText}
          onChange={e => setForm({ ...form, reviewText: e.target.value })}
        />

        <button
          type="submit"
          className={`btn bg-[#f43098] rounded-2xl text-white ${
            loading ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            'Add Review'
          )}
        </button>
      </form>
    </div>
  );
}
