import { useEffect, useState } from 'react';
import { apiFetch } from '../hooks/api';
import { Link, useParams } from 'react-router';

const ReviewDetails = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  // console.log(form);
  
  

  useEffect(() => {
    apiFetch(`/reviews/${id}`).then(d => {
      if (d) {
        setForm(d); 
      } else {
        console.log('No data returned');
      }
    });
  }, [id]);

  if (!form) {
    return (
      <div className="flex justify-center mt-6 flex-col items-center text-3xl text-[#f43098]  gap-4">
        <span className="loading loading-spinner text-8xl  text-secondary"></span>
        <div>Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <h2 className="text-2xl text-center m-4 md:text-5xl  text-[#f43098] font-extrabold">
          REVIEW DETAILS
        </h2>
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={form.r.photoUrl}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Food Name : {form.r.foodName}
            </h1>

            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
              RestaurantName : {form.r.restaurantName}
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Review Text : {form.r.reviewText}
            </p>
            <Link
              to="/"
              className="btn btn-outline border-1 mt-3.5 border-[#f43098] text-[#f43098] rounded-2xl p-2.5"
            >
              Back 

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
