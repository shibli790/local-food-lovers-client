import { useState } from "react";
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";


export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name:"", email:"", photoURL:"", password:"", confirm:"" });

  const validate = () => {
    if (form.password !== form.confirm) return "Passwords do not match";
    if (form.password.length < 6) return "Password must be ≥ 6 chars";
    if (!/[A-Z]/.test(form.password)) return "Password needs an uppercase letter";
    if (!/[a-z]/.test(form.password)) return "Password needs a lowercase letter";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return toast.error(err);
    try {
      await register(form.email, form.password, form.name, form.photoURL);
      nav("/");
    } catch (e) { toast.error(e.message); }
  };

  return (
    <div className="max-w-md mx-auto mt-32 card bg-base-100 w-full p-5 shrink-0 shadow-2xl">
      <h2 className="text-2xl text-center font-bold mb-4">Register</h2>
      <form onSubmit={submit} className="grid gap-3">
        <input
          required
          placeholder="Name"
          className="border px-3 py-2 rounded"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Photo URL"
          className="border px-3 py-2 rounded"
          value={form.photoURL}
          onChange={e => setForm({ ...form, photoURL: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="Confirm Password"
          className="border px-3 py-2 rounded"
          value={form.confirm}
          onChange={e => setForm({ ...form, confirm: e.target.value })}
        />
        <button className="btn bg-[#f43098] rounded-2xl text-white ">
          Create Account
        </button>
      </form>
      <h1 className="mt-3 text-sm">
        Already Account ?
        <Link className="underline text-[#f43098]" to="/login">
          login Naw
        </Link>
      </h1>
    </div>
  );
}
