import Button from "@/shared-components/button/Button";
import Input from "@/shared-components/input/Input";
import Image from "next/image";
import bg from "@/assets/image/Bg-Pemandangan.jpg";
import Link from "next/link";

type Formtypes = {
  children: JSX.Element;
  error?: string;
  label?: string;
  title?: string;
};

const AuthLayout = (props: Formtypes) => {
  const { children, error, label, title } = props;
  return (
    <div className="w-full h-screen fixed flex items-center justify-center bg-gray-200">
      <div className="container flex flex-col p-6 space-y-4 rounded-lg items-center bg-white drop-shadow-2xl w-[335px] h-fit justify-center  border-2 border-blue-600">
        <div className="flex flex-col items-center justify-center w-72 align-middle">
          <p className="text-sm">{label}</p>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <div className="w-full flex h-[1px] mt-2 text-white bg-blue-600">
            -
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
