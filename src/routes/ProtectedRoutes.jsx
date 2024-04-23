import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ canActivate, redirectPatch = "/" }) {
  if (!canActivate) {
    return <Navigate to={redirectPatch} replace />;
  }
  return <Outlet />;
}
