import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginForm = () => {
  const { uiDispatch } = useContext(GlobalContext);
  const { setUser, setToken } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          password,
          email,
        }
      );
      const { user, token } = data;
      setUser(user);
      setToken(token);
      toast.success("Login successful!");
      router.push("/feed");
    } catch (error) {
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="inline-block relative w-full max-w-sm px-8 py-16 overflow-hidden align-middle transition-all transform bg-white shadow-xl dark:bg-bg-200 rounded-md">
      <a
        onClick={() => {
          uiDispatch({ type: "CLOSE_MODAL" });
        }}
        className="text-2xl cursor-pointer absolute right-0 top-0 p-6 duration-150 ease-in-out hover:scale-110"
      >
        <IoMdClose />
      </a>
      <div className="flex gap-12 items-center justify-center flex-col text-center">
        {/* <Logo className="w-20" /> */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <GoogleLoginButton />
          <div className="divider">OR</div>
          <input
            required
            type="text"
            placeholder="Email/Username"
            className="input input-ghost w-full rounded-none input-bordered "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="input input-ghost w-full rounded-none input-bordered "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={`btn btn-primary rounded-none capitalize ${
              isLoading && "loading"
            }`}
          >
            Login
          </button>
          <div className="pt-1 text-center text-sm">
            <span className="text-accent-7">Don't have an account?</span>
            {` `}
            <a
              className="text-accent-9 font-bold hover:underline cursor-pointer"
              onClick={() =>
                uiDispatch({ type: "SET_MODAL_VIEW", view: "SIGNUP" })
              }
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
