import { Navigate, useLocation } from "react-router";
import { useAuth } from '../context/AuthProvider';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const loc = useLocation();
  if (loading) return (
    <div className="flex justify-center mt-6 flex-col items-center text-3xl text-[#f43098]  gap-4">
      <span className="loading loading-spinner text-8xl  text-secondary"></span>
      <div>Loading...</div>
    </div>
  );
  if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
  return children;
}
