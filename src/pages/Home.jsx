import GoToPage from "../components/GoToPage";
import Menu from "../components/Menu";
import signupIcon from "../assets/images/svg/signup.svg";
import loginIcon from "../assets/images/svg/login.svg";
export default function Home() {
  return (
    <section className="flex flex-col justify-between p-2  md:mt-8 min-h-[60vh]">
      <article className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl text-center font-title text-yellow-400">
          Welcome to our Star Wars API information page!
        </h1>
        <div className="my__grid gap-4 text-lg text-center ">
          <p>
            Are you a fan of the most epic galactic saga of all time? Then
            you`ve come to the right place! Here on our platform, you`ll dive
            into the vast universe of Star Wars, exploring the spacecraft,
            characters, planets, and much more.
          </p>
          <p>
            What can you expect from our page? Unlimited access to a wide range
            of fascinating data about the spacecraft that soar through the stars
            in the Star Wars galaxy. From the iconic X-Wings and TIE Fighters to
            the imposing Star Destroyers and the legendary Millennium Falcon,
            you`ll have access to detailed information about each of these ships
            and many more!
          </p>
          <p>
            However, to fully enjoy all the features and immerse yourself in the
            Star Wars universe, you need to create an account. Don`t worry, it`s
            quick and easy! Just provide us with your email address and a
            password so you can access everything our page has to offer.
          </p>
          <p>
            Once you`ve signed up, you`ll unlock a world of possibilities. In
            addition to exploring the ships, you`ll discover intriguing details
            about the characters, events, and locations that bring the Star Wars
            saga to life.
          </p>
          <div className="md:col-span-2 flex flex-col gap-4 h-full justify-between">
            <p>
              Are you ready to embark on an intergalactic adventure? Then create
              your account now and may the Force be with you on this exciting
              journey through the galaxy of Star Wars!
            </p>
            <Menu
              justify="center"
              border="border border-stone-800 border-l-0 border-r-0"
            >
              <section className="col-span-12 flex flex-col md:flex-row items-center md:justify-end gap-4">
                <GoToPage url={"/login"}>
                  <div className="flex items-center gap-2 ">
                    <span className="text-blue-200 hover:text-yellow-400">
                      You have an account?
                    </span>
                    <img
                      src={loginIcon}
                      alt="Login User"
                      title="You have an account?"
                    />
                  </div>
                </GoToPage>
                <GoToPage url={"/signup"}>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-200">
                      You do not have an account?
                    </span>
                    <img
                      src={signupIcon}
                      alt="Sign Up User"
                      title="You do not have an account"
                    />
                  </div>
                </GoToPage>
              </section>
            </Menu>
          </div>
        </div>
      </article>
    </section>
  );
}
