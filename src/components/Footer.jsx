import { Link } from 'react-router';

export default function Footer() {
  return (
    <>
      <section className="bg-[#f43098] text-white py-4 px-6 flex justify-between items-center  bottom-0 w-full">
        <footer className="footer sm:footer-horizontal container mx-auto text-white p-10 border-b-2 border-slate-400">
          <aside className="grid-flow-col r flex flex-col items-start ml-5">
            <p className="text-3xl font-semibold">
              Local Food Lovers Network
              <br />
            </p>
            <span className='text-lg'>Providing Food Review since 2025</span>
          </aside>
          <nav>
            <h6 className=" px-3 font-bold py-1">FoodReviews</h6>

            <Link to="/" className="px-3 footer-title py-1">
              Home
            </Link>

            <Link to="/add-review" className="block footer-title px-3 py-1">
              Add Review
            </Link>

            <Link to="/my-reviews" className="block footer-title px-3 py-1">
              My Reviews
            </Link>
          </nav>
          <nav>
            <h6 className="font-bold">Services</h6>
            <a className="link footer-title link-hover">Foods</a>
            <a className="link footer-title link-hover">Foods Reviews</a>
            <a className="link footer-title link-hover">Marketing</a>
            <a className="link footer-title link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="font-bold">Company</h6>
            <a className="link footer-title link-hover">About us</a>
            <a className="link footer-title link-hover">Contact</a>
            <a className="link footer-title link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="font-bold">Legal</h6>
            <a className="link footer-title link-hover">Terms of use</a>
            <a className="link footer-title link-hover">Privacy policy</a>
            <a className="link footer-title link-hover">Cookie policy</a>
          </nav>
        </footer>
        {/* ///////////////////////////////2nd footer */}
      </section>
    </>
  );
}
