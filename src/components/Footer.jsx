import { Link } from 'react-router';

export default function Footer() {
  return (
    <>
      <section className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center  bottom-0 w-full">
        {/* <div className="text-xl font-bold text-[#f43098]">LocalFoodNet</div>
      <div className="space-x-8">
        <a href="#" className="hover:text-pink-500">
          Quick Links
        </a>
        <a href="#" className="hover:text-pink-500">
          Robust News
        </a>
      </div> */}

        <footer className="footer sm:footer-horizontal container mx-auto text-[#f43098] p-10 border-b-2 border-slate-400">
          <aside className="grid-flow-col r flex flex-col items-start ml-5">
            {/* <TfiGame className="text-6xl text-[#f43098]" /> */}
            <p className="text-lg font-semibold">
              Game_Hub
              <br />
              Providing reliable tech since 2025
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">GameHub</h6>

            <Link to="/add-review" className="block px-3 py-1">
              Add Review
            </Link>

            <Link to="/my-reviews" className="block px-3 py-1">
              My Reviews
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Game</a>
            <a className="link link-hover">Apps</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        {/* ///////////////////////////////2nd footer */}
      </section>

    </>
  );
}
