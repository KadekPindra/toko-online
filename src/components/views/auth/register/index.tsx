import AuthLayout from '@/components/layout/AuthLayout';
import authServices from '@/services/auth';
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

    const result = await authServices.registerAccount(data);

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
    <AuthLayout error={error} label="Hi Visitors, Welcome to" title="Online Shop Website">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <Input label="Name" type="text" name="username" placeholder="Enter your name"/>
          <Input label="Email" type="email" name="email" placeholder="Enter your email">{error && <p className="text-red-500 text-sm">{error}</p>}</Input>
          <Input label="Password" type="password" name="password" placeholder="Enter your password"/>
          <Input label="Phone" type="number" name="phone" placeholder="Enter your phone"/>
          <Button type="submit" className="py-2 mt-5">{isLoading ? "Loading..." : "Register"}</Button>
          <div className="flex items-center w-full justify-center mt-2">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href={"/auth/login"}><span className="text-blue-600 hover: ">Sign In</span></Link>
            </p>
          </div>
        </form>
    </AuthLayout>
  );
};

export default RegisterView;
