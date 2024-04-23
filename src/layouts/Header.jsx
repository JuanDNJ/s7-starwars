import GoToPage from "../components/GoToPage";
import Logo from "../components/Logo";
import MainHeader from "../components/MainHeader";
import Menu from "../components/Menu";
import facebook from "../assets/images/svg/facebook.svg";
import x from "../assets/images/svg/x.svg";
import youtube from "../assets/images/svg/youtube.svg";
import instagram from "../assets/images/png/instagram.png";
import { useAppSelector } from "../store";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase";

export default function Header() {
  const { name, email, isLogin } = useAppSelector((state) => state.user);
  useEffect(() => {}, []);
  return (
    <>
      <Menu sticky="sticky top-0">
        <section className="col-span-8 md:col-span-6 flex gap-2">
          <GoToPage _blank icon url={"https://www.facebook.com/starwars.es"}>
            <img
              width={20}
              height={20}
              src={facebook}
              alt="Social Network Icon"
              title="Facebook"
            />
          </GoToPage>
          <GoToPage _blank icon url="https://www.instagram.com/starwars/">
            <img
              width={20}
              height={20}
              src={instagram}
              alt="Social Network Icon"
              title="Instagram"
            />
          </GoToPage>
          <GoToPage _blank icon url="https://twitter.com/starwars">
            <img
              width={20}
              height={20}
              src={x}
              alt="Social Network Icon"
              title="X"
            />
          </GoToPage>
          <GoToPage _blank icon url="https://www.youtube.com/@StarWars">
            <img
              width={20}
              height={20}
              src={youtube}
              alt="Social Network Icon"
              title="YouTube"
            />
          </GoToPage>
        </section>
        <section className="col-span-4 md:col-span-6 flex justify-end gap-4">
          {isLogin ? (
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-2 rounded-full w-8 h-8 border-2 border-yellow-400">
                <strong className=" text-pink-500">
                  {name[0].toUpperCase()}
                </strong>
              </div>
              <button onClick={() => signOut(appAuth)}>LogOut</button>
            </div>
          ) : (
            <>
              <GoToPage url="/login">Login</GoToPage>

              <GoToPage url="/signup">signup</GoToPage>
            </>
          )}
        </section>
      </Menu>
      <MainHeader>
        <Logo title="Star" subTitle="Wars" />
      </MainHeader>
      <Menu
        border="border border-stone-800 border-l-0 border-r-0"
        sticky="sticky top-12"
      >
        <section className="col-span-12 flex justify-center gap-4">
          <GoToPage url="/home">Home</GoToPage>
          <GoToPage url="/starships">StarShips</GoToPage>
        </section>
      </Menu>
    </>
  );
}
