import { set } from "firebase/database";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, use, useState } from "react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (error) {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen fixed flex items-center justify-center">
      <div className="container flex flex-col p-6 space-y-4 rounded-lg items-center bg-white drop-shadow-2xl w-[335px] h-[400px] justify-center  border-2 border-blue-600">
        <div className="flex flex-col items-center justify-center w-72 align-middle">
          <p className="text-sm">Hi Visitors, Welcome back to</p>
          <h1 className="text-2xl font-bold mb-2">Online Shop Website</h1>
          <div className="w-full flex h-[1px] mt-2 text-white bg-blue-600">
            -
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border shadow-md placeholder:text-sm outline-blue-600 text-sm pl-3 border-gray-300 p-2 rounded-xl "
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="border shadow-md placeholder:text-sm outline-blue-600 text-sm pl-3 border-gray-300 p-2 rounded-xl "
              required
            />
          </div>
          <div className="w-full flex justify-center ">
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 mt-5 hover:bg-blue-500 transition ease-in-out duration-300 text-white py-2 text-sm rounded-3xl "
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <div className="flex items-center w-full justify-center mt-2">
            <p className="text-sm">
              Don't have an account? please{" "}
              <Link href={"/auth/register"}>
                <span className="text-blue-600 hover: ">Sign Up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
