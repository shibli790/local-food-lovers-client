import React, { useEffect, useState } from 'react';
import { apiFetch } from '../hooks/api';
import { Link } from 'react-router';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FoodBlog from './FoodBlog';
import FoodNewsLatter from './FoodNewsLatter';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { SlLocationPin } from 'react-icons/sl';
import { GrUserManager } from 'react-icons/gr';
import { SiIfood } from "react-icons/si";



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    apiFetch('/featured-reviews')
      .then(data => {
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
                <SwiperSlide key={i.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="h-[360px] md:h-[420px] bg-no-repeat w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${i.photoUrl})`,
                    }}
                  >
                    <div className="h-full w-full container mx-auto from-base-100/90 to-transparent p-8 flex  items-end  ">
                      <div>
                        <h2 className="text-3xl flex gap-3 item-center md:text-5xl mb-3 text-[#f43098] font-bold">
                          {i.foodName} <SiIfood />
                        </h2>
                        <p className="text-xl flex gap-1 items-center font-bold  text-[#ffffffe7] ">
                          <SlLocationPin className="inline  text-lg " />
                          {i.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))
            ) : (
              <div></div>
            )}
          </Swiper>
        </div>
      </section>

      <div className="space-y-10 mt-5 container mx-auto px-4 py-6">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl bg-gradient-to-r from-[#ef48a1] to-[#d82d88] bg-clip-text text-transparent font-bold ">
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
            <div className="flex justify-center flex-col items-center text-3xl text-[#f43098]  gap-6">
              <span className="loading loading-spinner text-8xl text-secondary"></span>
              <div>Loading...</div>
            </div>
          ) : featured.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featured.map(r => (
                <motion.div
                  key={r._id}
                  className="card bg-base-100 shadow-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  <img
                    src={r.photoUrl}
                    alt={r.foodName}
                    className="h-70 w-full p-2 rounded-2xl object-cover"
                  />
                  <div className="p-4  space-y-1">
                    <div className="font-bold text-2xl text-[#f43098]">
                      Food Name : {r.foodName}
                    </div>
                    <div className=" text-sm opacity-80">
                      <div className="flex items-center gap-2">
                        <SiHomeassistantcommunitystore />
                        Restaurant Name : {r.restaurantName}
                      </div>

                      <div className="flex items-center gap-2">
                        <SlLocationPin className="inline text-sm " />
                        Restaurant Location : {r.location}
                      </div>
                    </div>
                    <div className="text-sm flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <GrUserManager />
                        Review By Name : {r.reviewerName}{' '}
                      </div>

                      <div>Rating : ⭐ {r.rating}</div>
                    </div>
                    <Link
                      to={`/reviewdetails/${r._id}`}
                      className="btn btn-outline mt-2 flex items-center gap-2 w-full border-1 border-[#f43098] text-[#f43098] rounded-2xl p-2.5"
                    >
                      <span>View Details</span> <FaCircleArrowRight />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>No featured reviews available</div>
          )}
        </section>

        {/* Extra sections */}
        <FoodBlog />
        <FoodNewsLatter />
      </div>
    </section>
  );
}
