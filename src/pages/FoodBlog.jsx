import React from 'react';
import { Link } from 'react-router';

const FoodBlog = () => {
  return (
    <div className="mt-12">
      <div className="">
        <h2 className="text-3xl text-[#f43098] font-bold mb-6">Foodie Blogs</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <div className=" shadow-xl border border-gray-200  p-4 rounded-lg">
            <h3 className="font-bold text-lg">10 Tips for the Perfect Pizza</h3>
            <p className="text-sm opacity-80">Published: November 10, 2025</p>
            <p className="text-sm mt-2">
              Discover the secrets to making the perfect pizza at home. From
              selecting the right dough to achieving the ideal crispiness, these
              tips will help you create a pizza that rivals your favorite
              pizzerias.
            </p>
            <Link href="#" className="text-[#f43098] hover:text-pink-700">
              Read more
            </Link>
          </div>

          {/* Blog Card 2 */}
          <div className="shadow-xl border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">
              Exploring the Best Street Foods
            </h3>
            <p className="text-sm opacity-80">Published: November 15, 2025</p>
            <p className="text-sm mt-2">
              Street food is a reflection of a city’s culture and flavors. In
              this post, we explore some of the best street foods around the
              world, from tacos in Mexico to currywurst in Berlin. Join us on
              this tasty journey!
            </p>
            <Link href="#" className="text-[#f43098] hover:text-pink-700">
              Read more
            </Link>
          </div>

          {/* Blog Card 3 */}
          <div className="shadow-xl border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">How to Pair Wine with Food</h3>
            <p className="text-sm opacity-80">Published: November 20, 2025</p>
            <p className="text-sm mt-2">
              Wine pairing can elevate any meal, but it can be tricky. This
              guide breaks down the basics of wine pairing, offering tips on
              pairing red, white, and sparkling wines with various dishes, from
              meat to seafood.
            </p>
            <Link href="#" className="text-[#f43098] hover:text-pink-700">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBlog;
