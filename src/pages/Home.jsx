import { useEffect, useState } from 'react';
import { apiFetch } from '../lib/api';
import { Link } from 'react-router';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlLocationPin } from 'react-icons/sl';
import { FaCircleArrowRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    apiFetch('/featured-reviews')
      .then(data => {
        // console.log(data); 
        setFeatured(data);
      })
      .catch(error => {
        console.error('API Error:', error);
        setFeatured([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="">
      <section className="relative z-1 overflow-hidden neon-edge">
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination
            autoplay={{ delay: 3000 }}
          >
            {featured.length > 0 ? (
              featured.map(i => (
                <SwiperSlide className="inset-0" key={i.id}>
                  <div
                    className="h-[360px] md:h-[420px] bg-no-repeat w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${i.photoUrl})`,
                    }}
                  >
                    <div className="h-full w-full container mx-auto from-base-100/90 to-transparent p-8 flex items-end">
                      <div>
                        <h2 className="text-3xl md:text-5xl text-[#f43098] font-bold">
                          {i.foodName}
                        </h2>
                        <p className="text-xl flex items-center font-bold m-2 text-[#ffffffc7] ">
                          <SlLocationPin className="inline ml-2 text-lg m-2" />
                          {i.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div></div>
            )}
          </Swiper>
        </div>
      </section>

      <div className="space-y-10 container mx-auto px-4 py-6">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl text-[#f43098] font-bold ">
              Featured Reviews
            </h2>
            <Link
              to="/reviews"
              className="btn btn-outline border-1 border-[#f43098] text-[#f43098] rounded-2xl p-2.5"
            >
              Show All
            </Link>
          </div>
          {loading ? (
            <div>
              <span className="loading loading-spinner text-secondary"></span>
              Loading...
            </div>
          ) : featured.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featured.map(r => (
                <div
                  key={r._id}
                  className="card bg-base-100 shadow-xl border border-gray-200 overflow-hidden"
                >
                  <img
                    src={r.photoUrl}
                    alt={r.foodName}
                    className="h-70 w-full p-2 rounded-2xl object-cover"
                  />
                  <div className="p-3 space-y-1">
                    <div className="font-bold text-2xl">
                      {' '}
                      Food Name :{r.foodName}
                    </div>
                    <div className="text-sm opacity-80">
                      RestaurantName : {r.restaurantName}
                      <div className="flex items-center gap-2">
                        {' '}
                        <SlLocationPin className="inline  text-sm " />{' '}
                        RestaurantLocation : {r.location}
                      </div>
                    </div>
                    <div className="text-sm  flex items-center justify-between gap-2">
                      Review By Name : {r.reviewerName}{' '}
                      <div>Rating : ⭐ {r.rating}</div>
                    </div>
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
          ) : (
            <div>No featured reviews available</div>
          )}
        </section>

        {/* Extra sections */}
        {/* <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold">Street Food Spotlight</h3>
            <p className="mt-2">
              Find the best carts and stalls your city hides.
            </p>
          </div>
          <div className="p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold">Home-Cook Heroes</h3>
            <p className="mt-2">
              Celebrate home kitchens serving love on a plate.
            </p>
          </div>
        </section> */}
      </div>
    </section>
  );
}
