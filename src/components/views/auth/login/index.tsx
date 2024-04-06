import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/shared-components/button/Button";
import Input from "@/shared-components/input/Input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

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
    <AuthLayout label="Hi Visitors, Welcome back to" title="Online Shop Website">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <Input label="Email" type="email" name="email" placeholder="Email" />
          <Input label="Password" type="password" name="password" placeholder="Password"/>
          <div className="w-full flex justify-center ">
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <Button type="submit" color="default" variant="contained" className="mt-5 py-2">
            {isLoading ? "Loading..." : "Login"}
          </Button>
          <p className="w-full flex items-center justify-center my-2">or</p>
          <Button 
            onClick={() => signIn('google', { callbackUrl, redirect: false })} 
            type="button" 
            color="default" 
            variant="outlined" 
            className="flex items-center text- justify-between px-11 py-1">
              <Image src="/google.png" alt="google" width={30} height={30} />
              <p>Sign in with Google</p>
          </Button>
          
          <div className="flex items-center w-full justify-center mt-2">
            <p className="text-sm">
              Don{"'"}t have an account? please {""}
              <Link href={"/auth/register"}>
                <span className="text-blue-600">Sign Up</span>
              </Link>
            </p>
          </div>
        </form>
    </AuthLayout>
    
  );
};

export default LoginView;
