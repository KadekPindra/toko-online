import userServices from "@/services/user";
import Button from "@/shared-components/button/Button";
import Modal from "@/shared-components/modal/Modal";
import { useState } from "react";

const ModalDeleteUser = (props: any) => {
    const { deletedUser, setDeletedUser, setUsersData } = props;
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = async () => {
        userServices.deleteUsers(deletedUser.id);
        setDeletedUser({});
        const { data } = await userServices.getAllUsers();
        setUsersData(data.data);
    }

    return(
        <Modal onClose={() => setDeletedUser({})}>
            <div className="flex flex-col w-full items-center justify-center gap-7">
                <div className="text-2xl flex ">
                    <h1>Are you sure you want to delete this user?</h1>
                </div>
                <div className="flex gap-5">
                    <Button type="button" variant="contained" color="secondary" onClick={() => setDeletedUser({})}
                    className="py-2 px-5 rounded-md text-xl">
                        {isLoading ? "Loading..." : "Cancel"}
                    </Button>
                    <Button type="button" variant="contained" color="danger" onClick={() => handleDelete()}
                    className="py-2 px-5 rounded-md text-xl">
                        {isLoading ? "Loading..." : "Delete"}
                    </Button>
                </div>
            </div>
            
        </Modal>
    )
}

export default ModalDeleteUser