import Button from "@/shared-components/button/Button";
import { signOut } from "next-auth/react";
import Link from "next/link"; 
import { useRouter } from "next/router";

type Propstypes = {
    lists: Array<{
        title: string;
        url: string;
        icon: string;
    }>
    label: string;
}

const Sidebar = (props: Propstypes) => {
    const {label} = props;
    const {lists} = props;
    const {pathname} = useRouter();

    return(
        <div className="h-screen p-5 bg-white shadow-xl border w-full ">
            <div>
                <h1 className="text-xl w-full flex justify-center py-4">{label}</h1>
                <p className="bg-blue-600 w-full mb-5 h-[1px] flex justify-center items-center text-transparent">-</p>
                {lists.map((list, index) => (
                    <Link
                     href={list.url} 
                     key={list.title} 
                     className={`py-2 cursor-pointer flex gap-2 transition-all duration-300 rounded-lg my-2 items-center px-5 ${pathname == list.url ? "bg-blue-500 text-white hover:bg-blue-600 hover:text-white" : "hover:bg-gray-100 active:text-white"}`}>
                        <i className={`bx ${list.icon} text-3xl`}/>
                        <p className="">{list.title}</p>
                    </Link>
                ))}
            </div>
            <Button 
             type="button" 
             variant="text" 
             className="absolute bottom-0 px-5 rounded-lg w-fit py-2 hover:bg-slate-100 hover:shadow-sm mb-5 flex items-center text-lg gap-2"
             onClick={() => signOut() }>
                <i className='bx bx-log-out-circle text-3xl'></i>
                <p>Logout</p>
            </Button>
        </div>
    );
};

export default Sidebar;