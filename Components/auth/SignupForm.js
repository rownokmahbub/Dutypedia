import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { useContext, useMemo, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import GoogleLoginButton from "./GoogleLoginButton";

const SignupForm = () => {
  const { uiDispatch } = useContext(GlobalContext);
  const { setUser, setToken } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usernameIsChecking, setUsernameIsChecking] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const restrictedUsernames = [
    "admin",
    "administrator",
    "root",
    "superuser",
    "superadmin",
    "super",
    "moderator",
    "mod",
  ];

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  const checkUsername = async () => {
    try {
      setUsernameIsChecking(true);
      if (!username) {
        setIsValid(false);
        setErrorMessage("");
        return;
      }
      if (username.length < 3) {
        setIsValid(false);
        setErrorMessage("Username must be at least 3 characters long");
        return;
      }
      if (username.length > 20) {
        setIsValid(false);
        setErrorMessage("Username must be less than 20 characters long");
        return;
      }
      if (restrictedUsernames.includes(username.toLowerCase().trim())) {
        setIsValid(false);
        setErrorMessage("Username is restricted");
        return;
      }
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/check-username/${username}`
      );
      if (data.username) {
        setErrorMessage("Username is already taken");
        setIsValid(false);
      } else {
        setErrorMessage(null);
        setIsValid(true);
      }
    } catch (error) {
      console.log(error);
      setIsValid(false);
      setErrorMessage("Username is restricted");
    } finally {
      setUsernameIsChecking(false);
    }
  };

  useEffect(() => {
    checkUsername();
  }, [username]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (!isValid) {
        return toast.error("Invalid username!");
      }
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          firstName,
          lastName,
          email,
          password,
          username: username.trim(),
          age,
          gender,
        }
      );
      const { user, token } = data;
      console.log(user, token);
      setUser(user);
      setToken(token);
      toast.success("Account created successfully!");
      router.push("/feed");
    } catch (error) {
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="inline-block relative w-full max-w-sm px-8 py-16 overflow-hidden align-middle transition-all transform bg-white shadow-xl">
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
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4"
        >
          <input
            required
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full rounded-none input-bordered "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full rounded-none input-bordered "
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="input input-ghost w-full rounded-none input-bordered "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="input input-ghost w-full rounded-none input-bordered "
              onChange={debouncedResults}
            />

            {usernameIsChecking ? (
              <p className="text-left text-xs mt-1">Checking...</p>
            ) : !isValid ? (
              <p className="text-xs text-left text-red-500 mt-1">
                {errorMessage}
              </p>
            ) : (
              <p className="text-xs text-left text-green-500 mt-1">
                Username is available
              </p>
            )}
          </div>
          <input
            required
            type="password"
            placeholder="Password"
            className="input input-ghost w-full rounded-none input-bordered "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="select select-bordered w-full rounded-none"
          >
            <option value="" disabled selected>
              Gender...
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <input
            type="number"
            min={12}
            max={100}
            required
            name="age"
            placeholder="Your age"
            className="input input-ghost w-full rounded-none input-bordered"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            type="submit"
            className={`btn btn-primary rounded-none capitalize ${
              isLoading && "loading"
            }`}
          >
            Sign up
          </button>
          <div className="pt-1 text-center text-sm">
            <span className="text-accent-7">Already have an account?</span>
            {` `}
            <a
              className="text-accent-9 font-bold hover:underline cursor-pointer"
              onClick={() =>
                uiDispatch({ type: "SET_MODAL_VIEW", view: "LOGIN" })
              }
            >
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
