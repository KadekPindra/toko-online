import userServices from "@/services/user";
import Button from "@/shared-components/button/Button";
import Input from "@/shared-components/input/Input";
import Modal from "@/shared-components/modal/Modal"
import Select from "@/shared-components/select/Select";
import { FormEvent, useState } from "react";


const ModalUpdateUser = (props: any) => {
    const {updatedUser, setUpdatedUser, setUsersData} = props
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const form: any = event.target as HTMLFormElement;
        const data = {
          role: form.role.value,
        };
    
        const result = await userServices.updateUsers(updatedUser.id, data);
    
        if (result.status === 200) {
          setIsLoading(false);
          setUpdatedUser({});
          const { data } = await userServices.getAllUsers();
          setUsersData(data.data);
        } else {
          setIsLoading(false);
        }
      };

    return(
        <>
            <Modal onClose={() => setUpdatedUser({})}>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full items-center mb-5 justify-center">
                        <h1 className="text-2xl font-semibold">Update User</h1>
                        <hr className="my-5 w-full border-blue-500"/>
                    </div>
                    <form onSubmit={handleUpdateUser} className="flex flex-col gap-5 font-medium">
                        <Input className="opacity-75" label="Name" type="text" name="username" placeholder="Enter your name" defaultValue={updatedUser.name} disabled/>
                        <Input className="opacity-75" label="Email" type="email" name="email" placeholder="Enter your email" defaultValue={updatedUser.email} disabled>{error && <p className="text-red-500 text-sm">{error}</p>}</Input>
                        <Input className="opacity-75" label="Phone" type="number" name="phone" placeholder="Enter your phone" defaultValue={updatedUser.phone} disabled/>
                        <Select label="Role" name="role" defaultValue={updatedUser.role} options={[
                            {label: 'Member', value: 'member'},
                            {label: 'Admin', value: 'admin'}
                        ]}/>
                        <div className="w-full flex items-center justify-end mt-5 gap-3">
                            <Button type="button" className="w-full px-10 py-2" onClick={() => setUpdatedUser({})} variant="outlined">
                                {isLoading ? "Loading..." : "Cancel"}
                            </Button>
                            <Button className="w-full px-10 py-2 border-2 border-blue-500" type="submit">
                                {isLoading ? "Loading..." : "Update"}
                            </Button>
                        </div>
                        
                    </form>
                </div>
                
            </Modal>
        </>
        
    )
}

export default ModalUpdateUser