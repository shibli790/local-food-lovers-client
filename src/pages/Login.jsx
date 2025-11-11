import { useState } from "react";
import { useAuth } from '../context/AuthProvider';
import { useLocation, useNavigate, Link } from "react-router";
import { toast } from "react-toastify";


export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const loc = useLocation();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav(loc.state?.from?.pathname || "/");
    } catch (e) {
      toast.error(e.message);
    }
  };

  const google = async () => {
    try {
      await loginWithGoogle();
      nav(loc.state?.from?.pathname || "/");
    } catch (e) { toast.error(e.message); }
  };

  return (
    <div className="max-w-md mx-auto mt-32 card bg-base-100 w-full p-5 shrink-0 shadow-2xl">
      <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
      <h2 className="text-2xl text-center font-bold mb-4">Jo</h2>
      <form onSubmit={onSubmit} className="grid gap-3">
        <input
          required
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn bg-[#f43098] rounded-2xl text-white ">
          Login
        </button>
      </form>
      <div className="flex items-center justify-center  gap-2 my-2">
        <div className="h-px w-16 bg-black"></div>
        <span className="text-sm text-black">or</span>
        <div className="h-px w-16 bg-black"></div>
      </div>
      <button
        onClick={google}
        className="  btn btn-outline  border-2 rounded-2xl flex items-center justify-center gap-2"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
      <p className="mt-3 text-sm">
        No account?{' '}
        <Link className="underline text-[#f43098]" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
}
