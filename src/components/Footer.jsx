import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { SiIfood } from 'react-icons/si';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#d82d88] to-[#da2786]  text-white py-4 px-6 flex justify-between items-center  bottom-0 w-full">
        <footer className="footer sm:footer-horizontal container mx-auto text-white p-10 border-b-2 border-slate-400">
          <aside className="grid-flow-col r flex flex-col items-start ">
            <p className="text-3xl font-bold">
              FoodReviews <SiIfood className="inline text-xl md:text-3xl" />
              <br />
            </p>
            <span className="text-lg">Local Food Lovers Network</span>
            <span className="text-lg">Providing Food Review since 2025</span>
          </aside>
          <nav>
            <h6 className=" px-3 font-bold py-1">FoodReviews</h6>

            <Link
              to="/"
              className="px-3  hover:text-gray-300 font-semibold py-1"
            >
              Home
            </Link>

            <Link
              to="/add-review"
              className="px-3  hover:text-gray-300 font-semibold py-1"
            >
              Add Review
            </Link>

            <Link
              to="/my-reviews"
              className="px-3  hover:text-gray-300 font-semibold py-1"
            >
              My Reviews
            </Link>
          </nav>
          <nav>
            <h6 className="font-bold px-3  py-1">Services</h6>
            <a className="px-3  hover:text-gray-300 font-semibold py-1">
              Foods
            </a>
            <a className="px-3  hover:text-gray-300 font-semibold py-1">
              Foods Reviews
            </a>
            <a className="px-3  hover:text-gray-300 font-semibold py-1">
              Marketing
            </a>
            <a className="px-3  hover:text-gray-300 font-semibold py-1">
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="font-bold px-3  py-1">Social media</h6>
            <Link
              to="https://x.com/"
              className="px-3 flex items-center gap-1 hover:text-gray-300 font-semibold py-1"
            >
              <FaSquareXTwitter /> Twitter
            </Link>
            <Link
              to="https://www.facebook.com/"
              className="px-3 flex items-center gap-1  hover:text-gray-300 font-semibold py-1"
            >
              <FaFacebook /> Facebook
            </Link>
            <Link
              to="https://www.instagram.com/"
              className="px-3 flex items-center gap-1 hover:text-gray-300 font-semibold py-1"
            >
              <FaInstagram /> Instagram
            </Link>
          </nav>
          <nav>
            <h6 className="font-bold px-3  py-1">Legal</h6>
            <a className="px-3  hover:text-gray-300 font-semibold py-1">
              Terms of use
            </a>
            <a className="px-3  hover:text-gray-300 font-semibold py-1">
              Privacy policy
            </a>
            <a className="px-3  hover:text-gray-300 font-semibold py-1">
              Cookie policy
            </a>
          </nav>
        </footer>
        {/* ///////////////////////////////2nd footer */}
      </section>
      <div className="flex  justify-center items-center text-center  text-white  bg-[#dd2386]">
        <p className="mb-2">
          Copyright © {new Date().getFullYear()} - All right reserved By SHIBLI
          AHMED .
        </p>
      </div>
    </>
  );
}
