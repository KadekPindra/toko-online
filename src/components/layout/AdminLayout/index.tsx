import Sidebar from "@/components/fragments/Sidebar"
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { title } from "process";


type Propstypes = {
    children: React.ReactNode;
}

const listSidebarItem = [
    {
        title: "Dashboard",
        url: "/admin", 
        icon: 'bx bxs-dashboard',
    },
    {
        title: "Product",
        url: "/admin/product",
        icon: 'bx bxs-archive',
    },
    {
        title: "Users",
        url: "/admin/users",
        icon: 'bx bxs-user-account',
    }
]

const AdminLayout = (props: Propstypes) => {
    const {children} = props;
    return(
        <div className="flex">
            <div className="w-72">
                <Sidebar lists={listSidebarItem}/>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;