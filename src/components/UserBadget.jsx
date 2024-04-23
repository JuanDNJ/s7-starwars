import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase";

export default function UserBadget() {
  const { displayName } = useAppSelector((state) => state.user);
  const redirect = useNavigate();
  const handlerLogOut = () => {
    signOut(appAuth);
    redirect("/");
  };
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-2 rounded-full w-8 h-8 border-2 border-yellow-400">
        <strong className=" text-pink-500 font-bold">
          {displayName[0].toUpperCase()}
        </strong>
      </div>
      <button type="button" onClick={handlerLogOut}>
        LogOut
      </button>
    </div>
  );
}
