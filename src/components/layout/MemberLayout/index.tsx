import Sidebar from "@/components/fragments/Sidebar"


type Propstypes = {
    children: React.ReactNode;
}

const listSidebarItem = [
    {
        title: "Dashboard",
        url: "/member", 
        icon: 'bx bxs-dashboard',
    },
    {
        title: "Orders",
        url: "/member/orders",
        icon: 'bx bxs-cart',
    },
    {
        title: "Profile",
        url: "/member/profile",
        icon: 'bx bx-user',
    }
]

const MemberLayout = (props: Propstypes) => {
    const {children} = props;
    return(
        <div className="flex">
            <div className="w-72">
                <Sidebar label="Member Page" lists={listSidebarItem}/>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default MemberLayout;