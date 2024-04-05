import Button from "@/shared-components/button/Button";
import Input from "@/shared-components/input/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push } = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      name: form.username.value,
      email: form.email.value,
      password: form.password.value,
      phone: form.phone.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email is already Register");
      console.log("error");
    }
  };

  return (
    <div className="w-full h-screen fixed flex items-center justify-center">
      <div className="container flex flex-col p-6 space-y-4 rounded-lg items-center bg-white drop-shadow-2xl w-[350px] h-fit justify-center  border-2 border-blue-600">
        <div className="flex flex-col items-center justify-center w-72">
          <p className="text-sm">Hii Visitors, Welcome to</p>
          <h1 className="text-2xl font-bold mb-2">Online Shop Website</h1>
          <div className="w-full flex h-[1px] mt-2 text-white bg-blue-600">
            -
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <Input
            label="Name"
            type="text"
            name="username"
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
          >
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </Input>
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <Input
            label="Phone"
            type="number"
            name="phone"
            placeholder="Enter your phone"
          />
          <Button
            type="submit"
            className="py-2 mt-5"
          >
            {isLoading ? "Loading..." : "Register"}
          </Button>
          
          <div className="flex items-center w-full justify-center mt-2">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href={"/auth/login"}>
                <span className="text-blue-600 hover: ">Sign In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
