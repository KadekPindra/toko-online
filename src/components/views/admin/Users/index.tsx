import AdminLayout from "@/components/layout/AdminLayout"
import Button from "@/shared-components/button/Button"
import Modal from "@/shared-components/modal/Modal";
import PanelHeader from "@/shared-components/panelHeader/PanelHeader"
import { useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import userServices from "@/services/user";
import ModalDeleteUser from "./ModalDeleteUser";

type PropTypes = {
    users: any;
}

const UsersAdminView = (props: PropTypes) => {
    const {users} = props
    const [updatedUser, setUpdatedUser] = useState<any>({});
    const [deletedUser, setDeletedUser] = useState<any>({});
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        setUsersData(users)
    }, [users]);

    return(
        <>
            <AdminLayout>
                <div className="w-full mb-5">
                    <PanelHeader title="Users Page" icon="bxs-user-account" />
                </div>
                <div className="w-full p-2 ">
                    <div className="w-full h-fit bg-white p-5  shadow-lg rounded-md">
                    <h1 className="text-2xl font-medium">Users List</h1>
                    <hr className="my-5 border-blue-500"/>
                    <table className="w-full flex flex-col justify-center ">
                        <thead className="flex flex-col justify-center">
                           <tr className="w-full flex justify-between">
                                <th className="w-full flex p-2">No</th>
                                <th className="w-full flex p-2">Username</th>
                                <th className="w-full flex p-2">Phone</th>
                                <th className="w-full flex p-2">Role</th>
                                <th className="w-full flex p-2">Email</th>
                                <th className="w-full flex p-2">Action</th>
                            </tr>  
                        </thead>
                        <tbody className="flex flex-col justify-center w-full">
                            {usersData.map((user: any, index: number) => (
                                <tr key={index} className="w-full flex justify-between">
                                    <td className="border-t px-2 border-gray-100 w-full flex items-center justify-start">{index + 1}</td>
                                    <td className="border-t px-2 border-gray-100 w-full flex items-center justify-start">{user.name}</td>
                                    <td className="border-t px-2 border-gray-100 w-full flex items-center justify-start">{user.phone}</td>
                                    <td className="border-t px-2 border-gray-100 w-full flex items-center justify-start">{user.role}</td>
                                    <td className="border-t px-2 border-gray-100 w-full flex items-center justify-start">{user.email}</td>
                                    <td className="border-t px-2 border-gray-100 w-full flex items-center justify-start gap-2">
                                        <Button type="button" variant="text" onClick={() => setUpdatedUser(user)}>
                                            <i className='bx bxs-pencil p-2 text-2xl transition-colors duration-100 hover:text-blue-400'></i>
                                        </Button>
                                        <Button type="button" variant="text">
                                            <i className='bx bx-trash-alt text-2xl transition-colors duration-100 hover:text-red-500'
                                            onClick={() => setDeletedUser(user)}></i>
                                        </Button>
                                    </td>
                                </tr> 
                            ))}
                        </tbody>
                        </table> 
                    </div>
                </div>
            </AdminLayout>
            {Object.keys(updatedUser).length && (
                <ModalUpdateUser 
                 updatedUser={updatedUser}
                 setUpdatedUser={setUpdatedUser}
                 setUsersData={setUsersData}
                />
            )}
            {Object.keys(deletedUser).length && (
                <ModalDeleteUser 
                 deletedUser={deletedUser}
                 setDeletedUser={setDeletedUser}
                 setUsersData={setUsersData}
                />
            )}
        </>   
    )
}

export default UsersAdminView