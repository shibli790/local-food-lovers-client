import React from 'react';

const FoodNewsLatter = () => {
  return (
    <div className="rounded-2xl mt-16 p-8 md:p-10 bg-gradient-to-br from-[#f43098] to-[#a52dbd] border border-primary/20 ">
      <p className="opacity-80 mb-5 text-center">
        <div className="rounded-2xl p-8 md:p-10  ">
          <h3 className="text-2xl  md:text-3xl text-center font-bold mb-3">
            Subscribe Newsletters
          </h3>
          <p className="opacity-80 text-white mb-5 text-center">
            Stay updated with the latest food reviews, special promotions, new
            restaurant openings, and exciting food trends! Sign up for our
            newsletter to receive fresh reviews and delicious updates directly
            to your inbox every week.
          </p>

          <form class="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              id="email"
              type="email"
              required
              placeholder="user@yoursite.com"
              class="h-12 flex-1 rounded-full border border-white/60 bg-white/80 px-5 text-slate-800 placeholder-slate-500 shadow-inner outline-none"
            />
            <button
              type="submit"
              class="h-12 shrink-0 rounded-full bg-gradient-to-br from-[#f43098] to-[#a52dbd] px-6 text-base font-semibold text-white shadow-lg hover:shadow-xl "
            >
              Subscribe
            </button>
          </form>
        </div>
      </p>
    </div>
  );
};

export default FoodNewsLatter;