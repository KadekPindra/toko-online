import { Dispatch, useEffect, useRef } from "react";

type Proptypes = {
  children: React.ReactNode;
  onClose: any;
};

const Modal = (props: Proptypes) => { 
  const { children, onClose } = props;
  const ref: any = useRef();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed w-full h-screen top-0 bg-gray-500 bg-opacity-40 backdrop-filter backdrop-blur-sm flex items-center justify-center ">
      <div ref={ref} className="w-1/3 h-fit bg-white py-20 px-14 shadow-2xl rounded-md">
        {children}
      </div>
    </div> 
  );
};

export default Modal;
 