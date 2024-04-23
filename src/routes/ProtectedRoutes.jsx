import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

export default function ProtectedRoutes({ redirectPatch = "/" }) {
  const { isLogin } = useAppSelector((state) => state.user);
  if (!isLogin) {
    return <Navigate to={redirectPatch} replace />;
  }
  return <Outlet />;
}
