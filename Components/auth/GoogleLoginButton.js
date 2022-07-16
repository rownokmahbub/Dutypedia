import { useContext, useState } from "react";
import { GlobalContext } from "@lib/globalContext";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = () => {};
  return (
    <div className="">
      <a
        onClick={signInWithGoogle}
        disabled={isLoading}
        className="btn rounded-none bg-gray-700 hover:bg-gray-800 btn-block normal-case"
      >
        <FcGoogle className="mr-4 text-xl" />
        Log in with Google
      </a>
    </div>
  );
}
