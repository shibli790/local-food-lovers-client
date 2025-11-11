import { Navigate, useLocation } from "react-router";
import { useAuth } from '../context/AuthProvider';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const loc = useLocation();
  if (loading) return <div className="h-48 grid place-items-center">Loading...</div>;
  if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
  return children;
}
