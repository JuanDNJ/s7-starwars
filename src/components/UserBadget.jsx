import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase";
import logouIcon from "../assets/images/svg/logout.svg";
export default function UserBadget() {
  const { displayName } = useAppSelector((state) => state.user);
  const redirect = useNavigate();
  const handlerLogOut = () => {
    signOut(appAuth);
    redirect("/");
  };
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex flex-col justify-center items-center rounded-full w-8 h-8 border-[1px] border-stone-800  text-yellow-400  "
        title={`User ${displayName}`}
      >
        <strong className="text-md font-extrabold">
          {displayName[0].toUpperCase()}
        </strong>
      </div>
      <button type="button" onClick={handlerLogOut} title="LogOut">
        <img src={logouIcon} width={28} alt="Sign Out Icon" />
      </button>
    </div>
  );
}
