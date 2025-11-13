import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider";
import { IoIosLogOut } from 'react-icons/io';
import { FaAlignRight } from 'react-icons/fa6';
import { SiIfood } from "react-icons/si";


const Active = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      ` text-center  text-bold font-medium smooth ${
        isActive ? '  border-b-2 text-[#f43098]' : ''
      }`
    }
  >
    {children}
  </NavLink>
);


export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  return (
    <header className="sticky shadow-xl   top-0 z-50 backdrop-blur bg-base-100/80 border-b border-base-content/10">
      <div className="mx-auto flex justify-between px-4 md:px-6 lg:px-8 navbar">
        <Link
          to="/"
          className=" text-lg  font-bold md:text-2xl font-bold lg:text-3xl   inline text-[#f43098] "
        >
          FoodReviews <SiIfood className="inline text-xl md:text-3xl" />
        </Link>

        <nav className={`md:grid-cols-3 lg:grid-cols-3 items-center   `}>
          {user ? (
            <div className="flex justify-between items-center gap-6 ">
              <div className="flex text-sm  md:flex gap-8 text-lg font-medium">
                <Active to="/">Home</Active>
                <Active to="/reviews">All Reviews</Active>
              </div>

              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=" mx-4">
                  <img
                    src={user.photoURL || 'https://i.pravatar.cc/40'}
                    alt="user"
                    className="btn btn-ghost btn-circle avatar border-2 border-[#ff009d]"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Active to="/add-review" className="block px-3 py-1">
                      Add Review
                    </Active>
                  </li>
                  <li>
                    <Active to="/my-reviews" className="block px-3 py-1">
                      My Reviews
                    </Active>
                  </li>
                  <li>
                    <Active to="/favorites" className="block px-3 py-1">
                      My Favorites
                    </Active>
                  </li>
                  <li>
                    <button
                      onClick={() => logout().then(() => nav('/'))}
                      className="w-full font-extrabold  rounded-2xl text-[#f43098]  text-left "
                    >
                      Logout <IoIosLogOut className="font-extrabold" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center gap-6 ">
              <div className="flex text-sm  md:flex gap-8 text-lg font-medium">
                <Active to="/">Home</Active>
                <Active to="/reviews">All Reviews</Active>
              </div>
              <section className=" flex items-center gap-4">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost md:hidden"
                  >
                    <h1 className="text-2xl">
                      <FaAlignRight />
                    </h1>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm "
                  >
                    <li className="py-1 hover:text-secondary ">
                      <Active to="/add-review" className=" ">
                        Add Review
                      </Active>
                    </li>
                    <li className="py-1 hover:text-secondary ">
                      <Active to="/my-reviews" className=" ">
                        My Reviews
                      </Active>
                    </li>
                    <li className="py-1 hover:text-secondary ">
                      <Active to="/favorites" className=" ">
                        My Favorites
                      </Active>
                    </li>

                    <li className="py-1 hover:text-secondary">
                      <Active to="/login" className=" ">
                        Login
                      </Active>
                    </li>
                    <li className="py-1 hover:text-secondary ">
                      <Active to="/register" className="  ">
                        Register
                      </Active>
                    </li>
                  </ul>
                </div>
                <div className=" hidden md:grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    className=" rounded-2xl w-full btn text-secondary border border-secondary  "
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className=" rounded-2xl w-full px-1 btn text-white  btn-secondary"
                  >
                    Register
                  </Link>
                </div>
              </section>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
