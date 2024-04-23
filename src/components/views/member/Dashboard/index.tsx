import MemberLayout from "@/components/layout/MemberLayout"
import PanelHeader from "@/shared-components/panelHeader/PanelHeader"

const DashboardMemberView = () => {
    return(
        <MemberLayout>
            <div className="w-full">
                <PanelHeader title="Dashboard Page" icon="bxs-dashboard" />
            </div>
        </MemberLayout>
    )
}

export default DashboardMemberView