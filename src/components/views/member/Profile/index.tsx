import MemberLayout from "@/components/layout/MemberLayout";
import Input from "@/shared-components/input/Input";
import PanelHeader from "@/shared-components/panelHeader/PanelHeader";
import { useSession } from "next-auth/react";


const ProfileMemberView = ({ profile }: any) => {
  const session = useSession();
  console.log(session);

  console.log(profile);
  return (
    <MemberLayout>
      <div className="w-full">
        <PanelHeader title="Profile Page" icon="bx-user" />
      </div>

      <div className="my-2 border-2 flex bg-white shadow-xl h-screen gap-10">
        <div className="w-1/4 bg-gray-400 flex justify-center py-10 px-2">
          avatar
        </div>
        <div className="w-full ">
          <div>
            <Input
              label="Name"
              type="text"
              name="fullname"
              placeholder="Name"
              defaultValue={profile?.fullname}
              disabled
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={profile?.email}
              disabled
            />
            <Input
              label="Phone"
              type="text"
              name="phone"
              placeholder="Phone"
              defaultValue={profile?.phone}
              disabled
            />
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default ProfileMemberView;
