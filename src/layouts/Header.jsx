import GoToPage from "../components/GoToPage";
import Logo from "../components/Logo";
import MainHeader from "../components/MainHeader";
import Menu from "../components/Menu";
import facebook from "../assets/images/svg/facebook.svg";
import x from "../assets/images/svg/x.svg";
import youtube from "../assets/images/svg/youtube.svg";
import loginIcon from "../assets/images/svg/login.svg";
import signupIcon from "../assets/images/svg/signup.svg";
import instagram from "../assets/images/png/instagram.png";
import { useAppSelector } from "../store";

import { Fragment } from "react";
import UserBadget from "../components/UserBadget";

export default function Header() {
  const { isLogin } = useAppSelector((state) => state.user);

  return (
    <Fragment>
      <Menu sticky="sticky top-0">
        <section className="col-span-8 md:col-span-6 flex gap-4">
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
            <UserBadget />
          ) : (
            <Fragment>
              <GoToPage url="/login">
                <img
                  src={loginIcon}
                  alt="Login User"
                  title="You have an account?"
                />
              </GoToPage>
              <GoToPage url="/signup">
                <img
                  src={signupIcon}
                  alt="Sign Up User"
                  title="You do not have an account"
                />
              </GoToPage>
            </Fragment>
          )}
        </section>
      </Menu>
      <MainHeader>
        <Logo title="Star" subTitle="Wars" />
      </MainHeader>
      <Menu
        border="border border-stone-800 border-l-0 border-r-0"
        sticky="sticky top-10"
      >
        <section className="col-span-12 flex justify-center gap-4">
          <GoToPage url="/home">Welcome</GoToPage>
          {isLogin && <GoToPage url="/starships">StarShips</GoToPage>}
        </section>
      </Menu>
    </Fragment>
  );
}
